import React, { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import { ButtonStyled, Form, Main, MainContainer, ShowInput } from "./style";

import Header from "../../components/Header";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { BASE_URL } from "../../constants/baseUrl";
import { useRequestData } from "../../hooks/useRequestData";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goToBack, goToProfile } from "../../routes/coordinator";
import Swal from "sweetalert2";
import { DivLogo, ImgLogo } from "../login/style";
import { GoTOBack } from "../login/style";
import pizzaLogo from "../../assets/pizzaLogo.png"

const ProfileEdit = () => {
  useProtectedPage();
  const person = useRequestData({}, `${BASE_URL}/user`);
  const { form, onChangeForm, setForm, clear } = useForm({
    name: "",
    email: "",
    cpf: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    getPerson();
  }, []);

  const token = localStorage.getItem("token");
  const getPerson = async () => {
    await axios
      .get(`${BASE_URL}/user`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setForm({
          name: res.data.user.name,
          email: res.data.user.email,
          cpf: res.data.user.cpf,
        });
      })
      .catch((error) => {
        alert(error.response);
      });
  };

  const updateProfile = async () => {
    await axios
      .put(`${BASE_URL}/user`, form, {
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

  const cpfFormat = (value) => {
    if (person.user && person.user.cpf) {
      return value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1");
    }
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    updateProfile();
  };

  return (
    <MainContainer>
      <DivLogo>
      <GoTOBack onClick={() => goToBack(navigate)} />
      <ImgLogo src={pizzaLogo} alt="Fornália de pizza" />
      <h1>Pizza na Brasa</h1>
      </DivLogo>
      <Main>
        <h2>Editar perfil</h2>
        <Form onSubmit={onSubmitForm}>
          <ShowInput
            id="outlined-basic"
            label={"Nome"}
            name="name"
            type={"text"}
            variant="outlined"
            value={form.name}
            onChange={onChangeForm}
            required
          />

          <ShowInput
            id="outlined-basic"
            label={"E-mail"}
            name="email"
            type={"email"}
            placeholder={"Digite seu email"}
            variant="outlined"
            value={form.email}
            onChange={onChangeForm}
            required
          />
          <ShowInput
            id="outlined-basic"
            name="cpf"
            type={"text"}
            variant="outlined"
            value={cpfFormat(form.cpf)}
            onChange={onChangeForm}
            required
          />
          <ButtonStyled type="submit">Salvar</ButtonStyled>
        </Form>
      </Main>
    </MainContainer>
  );
};

export default ProfileEdit;
