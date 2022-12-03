import styled from "styled-components";
import { IconButton, Button, ButtonBase, TextField } from "@mui/material";
import PizzasHome from "../../assets/Pizza_with_olive_and_onion.jpg";
import { primaryColor, tertiaryColor } from "../../constants/colors";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url(${PizzasHome});
  background-position: 100%;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 300px) and (max-width: 500px) {
    padding: 1.25rem;
  }
`;

export const DivLogo = styled.div`
  position: relative;
  display: flex;
  width: 90%;
  margin-top: 10px;
  h1 {
    color: ${tertiaryColor};
    text-align: center;
  }
  @media (min-width: 300px) and (max-width: 500px) {
    width: 100%;
    h1 {
      font-size: 1.8rem;
    }
  }
`;
export const GoTOBack = styled(ArrowBackIosNewIcon)`
  && {
    cursor: pointer;
    font-size: 2rem;
    color: ${tertiaryColor};
    margin: 20px 20px 0 20px;
    :hover {
      box-shadow: 0 5px 0;
    }

    :active {
      position: relative;
      top: 5px;
      box-shadow: none;
    }
    @media (min-width: 300px) and (max-width: 500px) {
      margin: 5px 5px 0 0;
      :active {
        position: absolute;
        top: 12px;
      }
    }
  }
`;

export const ImgLogo = styled.img`
  width: 7rem;
  border-radius: 25%;

  @media (min-width: 300px) and (max-width: 500px) {
    width: 4rem;
  }
  @media (min-width: 500px) and (max-width: 900px) {
    /* width: 5rem; */
  }
`;

export const Main = styled.section`
  position: absolute;
  top: 130px;
  padding: 0.625rem;
  width: 30%;
  min-width: 360px;
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid lightgray 1px;
  border-radius: 0.625rem;
  #signup-reference {
    text-align: center;
    width: 19.375rem;
    border-radius: 5px;
    background-color: lightgray;
    color: blue;
  }
  h2 {
    text-align: center;
    margin-top: 10px;
    color: white;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 19.375rem;
  height: 40%;
  justify-content: space-evenly;
`;

export const DeliveryImg = styled.img`
  width: 240px;
  height: 200px;
  margin-top: 30px;
`;

export const ShowInput = styled(TextField)`
  && {
    width: 100%;
    border: solid lightgray 1px;
    background-color: #eaacac;
    border-radius: 5px;
  }
`;
export const ButtonStyled = styled(ButtonBase)`
  && {
    width: 100%;
    padding: 10px;
    font-size: 1.5rem;
    background: red;
    border-radius: 5px;
    :hover {
      border-radius: 0.938rem;
      color: white;
      box-shadow: rgb(208, 4, 4) 0px 0px 20px 0px;
      -webkit-box-shadow: rgb(208, 4, 4) 0px 0px 20px 0px;
      -moz-box-shadow: rgb(208, 4, 4) 0px 0px 20px 0px;
    }

    :active {
      position: relative;
      top: 5px;
    }
  }
`;

export const ShowButton = styled(IconButton)`
  && {
    width: auto;
    color: #fff;
  }
`;
export const ButtonSignup = styled(Button)`
  && {
    width: auto;
    color: blue;
    :hover {
      color: ${primaryColor};
      font-weight: 900;
    }
    :active {
      position: relative;
      top: 5px;
    }
  }
`;

export const DivPassword = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
