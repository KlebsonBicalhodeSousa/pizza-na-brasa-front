import React, { useEffect } from "react";
import { ButtonStyled, Form, Main, MainContainer, ShowInput } from "./style";
import { useForm } from "../../hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../../constants/baseUrl";
import Swal from "sweetalert2";
import { goToBack, goToProfile } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import pizzaLogo from "../../assets/pizzaLogo.png"
import { DivLogo, GoTOBack, ImgLogo } from "../login/style";

function AddressEdit() {
  const { form, onChangeForm, setForm, clear } = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  useEffect(() => {
    getAddress();
  }, []);

  const token = localStorage.getItem("token");

  const getAddress = async () => {
    await axios
      .get(`${BASE_URL}/user/address`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res.data.address);
        setForm({
          street: res.data.address.street,
          number: res.data.address.number,
          neighbourhood: res.data.address.neighbourhood,
          city: res.data.address.city,
          state: res.data.address.state,
          complement: res.data.address.complement,
        });
      })
      .catch((error) => {
        alert(error.response);
      });
  };

  const navigate = useNavigate();

  const updateAddress = async () => {

    const token = localStorage.getItem("token");
    await axios
      .put(`${BASE_URL}/user/address`, form, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        goToProfile(navigate);
        Swal.fire({
          title: res.data.message,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      })
      .catch((error) => {
        Swal.fire({
          title: error.response.data.message,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      });
  };

  const onSubmitFormAddress = (event) => {
    event.preventDefault();
    updateAddress();
  };

  return (
    <MainContainer>
      <DivLogo>
      <GoTOBack onClick={() => goToBack(navigate)} />
      <ImgLogo src={pizzaLogo} alt="Fornália de pizza" />
      <h1>Pizza na Brasa</h1>
      </DivLogo>
      <Main>
        <h2>Editar Endereço</h2>
        <Form onSubmit={onSubmitFormAddress}>
          <ShowInput
            id="outlined-basic"
            label={"Logradouro"}
            name="street"
            type={"text"}
            variant="outlined"
            value={form.street}
            onChange={onChangeForm}
            required
          />
          <ShowInput
            id="outlined-basic"
            label={"Número"}
            name="number"
            type={"text"}
            variant="outlined"
            value={form.number}
            onChange={onChangeForm}
            required
          />
          <ShowInput
            id="outlined-basic"
            label={"Complemento"}
            name="complement"
            type={"text"}
            variant="outlined"
            value={form.complement}
            onChange={onChangeForm}
          />
          <ShowInput
            id="outlined-basic"
            label={"Bairro"}
            name="neighbourhood"
            type={"text"}
            variant="outlined"
            value={form.neighbourhood}
            onChange={onChangeForm}
            required
          />
          <ShowInput
            id="outlined-basic"
            label={"Cidade"}
            name="city"
            type={"text"}
            variant="outlined"
            value={form.city}
            onChange={onChangeForm}
            required
          />
          <ShowInput
            id="outlined-basic"
            label={"Estado"}
            name="state"
            type={"text"}
            variant="outlined"
            value={form.state}
            onChange={onChangeForm}
            required
          />
          <ButtonStyled type="submit">Salvar</ButtonStyled>
        </Form>
      </Main>
    </MainContainer>
  );
}

export default AddressEdit;
