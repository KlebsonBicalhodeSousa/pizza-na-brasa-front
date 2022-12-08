import { Visibility, VisibilityOff } from "@mui/icons-material";
import delivery from "../../assets/delivery.png";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/baseUrl";
import Swal from "sweetalert2";
import {
  Main,
  Form,
  ButtonStyled,
  DivPassword,
  ShowButton,
  ShowInput,
  MainContainer,
  DeliveryImg,
  ButtonSignup,
  ImgLogo,
  DivLogo,
  GoTOBack,
} from "./style";
import {
  goToAdminPage,
  goToBack,
  goToPizzasMenuPage,
  goToSignUp,
  goToSignUpAddress,
} from "../../routes/coordinator";
import Header from "../../components/Header";
import pizzaLogo from "../../assets/pizzaLogo.png"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmitLogin = (event) => {
    event.preventDefault();
    loginPizzaMenu();
  };

  const loginPizzaMenu = async () => {
    const body = {
      email,
      password,
    };
    await axios
      .post(`${BASE_URL}/user/login`, body)
      .then((res) => {
        setEmail("");
        setPassword("")
        localStorage.setItem("role", res.data.user.role)
        localStorage.setItem("token", res.data.token);
        if (res.data.user.role === "NORMAL") {
          if (res.data.user.hasAddress === false) {
            goToSignUpAddress(navigate);
            Swal.fire({
              title: `${res.data.message}! Cadastre um endereço para entrega`,
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });
          } else {
            goToPizzasMenuPage(navigate);
            Swal.fire({
              title: `${res.data.message}`,
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });
          }
        } else {
          goToAdminPage(navigate);
        }
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

  return (
    <MainContainer>
      <DivLogo>
      <GoTOBack onClick={() => goToBack(navigate)} />
      <ImgLogo src={pizzaLogo} alt="Fornália de pizza" />
      <h1>Pizza na Brasa</h1>
      </DivLogo>
      <Main>
        <h2>Entrar</h2>
        <Form onSubmit={onSubmitLogin}>
          <ShowInput
            id="outlined-basic"
            label="Email"
            type="email"
            variant="outlined"
            placeholder="email@email.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <DivPassword>
            <ShowInput
              id="outlined-basic"
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              placeholder="Mínimo 6 caracteres"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              inputProps={{
                minLength: 6,
                title: "A senha deve conter no mínimo 6 caracteres",
              }}
            />
            <ShowButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </ShowButton>
          </DivPassword>

          <ButtonStyled type="submit">Entrar</ButtonStyled>
        </Form>
        <p id="signup-reference">Não possui cadastro?<ButtonSignup onClick={() => goToSignUp(navigate)}>clique aqui</ButtonSignup></p>
        <DeliveryImg src={delivery} alt="Desenho motodelivery" />
      </Main>
    </MainContainer>
  );
}

export default Login;
