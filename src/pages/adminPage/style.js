import { ButtonBase, TextField } from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import styled from "styled-components";
import pizzaVegana from "../../assets/pizzaVegana.jpg";
import {
  mainColor,
  primaryColor,
  quintenaryColor,
  secondaryColor,
} from "../../constants/colors";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  flex-wrap: wrap;
  min-height: 100vh;
  background-color: ${mainColor};
  @media (min-width: 300px) and (max-width: 500px) {
    padding: 1.25rem;    
  }  
`;

export const Main = styled.div`
  overflow: auto;
  position: absolute;
  margin-top: 130px;
  padding: 0.625rem;
  width: 100%;
  min-width: 280px;
  height: 85.5vh;
  display: flex;
  flex-direction: column;
  align-items: center;  
  border-radius: 0.625rem;

  h2 {
    text-align: center;
    padding: 0.625rem;
    color: #fff;
  }

  @media (min-width: 501px) and (max-width: 930px) {
    /* position: unset; */
    margin-top: 10px;
  }

  @media (min-width: 300px) and (max-width: 500px) {
    position: unset;
    margin-top: 100px;
    height: 100%;
  }
`;

export const MenuButton = styled(MenuOpenIcon)`
  && {
    font-size: 2rem;
    color: ${primaryColor};
    cursor: pointer;
    :hover {
      color: white;
      background: #9e0707;
      transition: 0.5s;
    }

    :active {
      position: relative;
      top: 5px;
    }
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;
  width: 100%;

  @media (min-width: 300px) and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const FormPizza = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3125rem;
  align-items: center;
  justify-content: space-between;
  width: 26rem;
  height: 10rem;
  background-color: ${secondaryColor};
  padding: 0.625rem;
  border-radius: 10px;

  @media (min-width: 300px) and (max-width: 500px) {
    flex-direction: column;
    width: 100%;
    height: auto;
  }
`;
export const FormIngrediente = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3125rem;
  align-items: center;
  justify-content: space-between;
  width: 26rem;
  height: 10rem;
  background-color: ${secondaryColor};
  padding: 0.625rem;
  border-radius: 10px;
  @media (min-width: 300px) and (max-width: 500px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const ShowInput = styled(TextField)`
  && {
    width: 190px;
    /* height: 40px; */
    border: solid lightgray 1px;
    background-color: #eaacac;
    border-radius: 5px;

    @media (min-width: 300px) and (max-width: 500px) {
      width: 100%;
    }
  }
`;
export const ButtonStyled = styled(ButtonBase)`
  && {
    width: auto;
    height: 40px;
    padding: 10px;
    font-size: 1.5rem;
    background: ${primaryColor};
    cursor: pointer;
    border-radius: 0.469rem;
    :hover {
      color: white;
      background: #9e0707;
      transition: 0.5s;
    }

    :active {
      position: relative;
      top: 5px;
    }
    @media (min-width: 300px) and (max-width: 500px) {
      width: 100%;
    }
  }
`;

export const ImageCard = styled.img`
  width: 15.625rem;
`;

export const ContainerCard = styled.div`
  overflow: auto;
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  border: solid lightgray 1px;
  border-radius: 10px;
  ::-webkit-scrollbar {
    background-color: transparent;
  }
  @media (min-width: 300px) and (max-width: 500px) {
    width: 300px;
    display: flex;
    align-self: center;
    justify-content: center;
    overflow: unset;
    width: auto;
    height: auto;
  }
`;
export const Card = styled.div`
  width: 15.625rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border-radius: 0.625rem;
  cursor: pointer;
  box-shadow: rgb(155, 61, 227) 0px 0px 13px 3px;
  -webkit-box-shadow: rgb(155, 61, 227) 0px 0px 13px 3px;
  -moz-box-shadow: rgb(155, 61, 227) 0px 0px 13px 6px;

  :hover {
    background-color: #f8681b;
  }

  img {
    width: 15rem;
  }

  h3,
  .card-price {
    text-align: center;
    margin: 0.625rem 0;
    color: #fff;
  }
`;

export const AddRemove = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  i {
    width: auto;
    margin-bottom: 0.3125rem;
    padding: 0;
    color: #ffff;
    background-color: #ff0000;
    font-size: 2.5rem;
    display: flex;
    text-align: center;
    justify-items: center;
    border-radius: 50%;
    transition: 0.5s;
    :hover {
      color: ${secondaryColor};
      background-color: #fff;
    }
    :active {
      position: relative;
      top: 5px;
    }
  }
`;

export const ContainerIngredients = styled.div`
  width: 15.625rem;
  height: 250px;
  margin: 1rem;
  border: solid white 1px;
  padding: 10px;
  border-radius: 10px;
  h3 {
    color: #fff;
  }
  #card-ingredients {
    overflow: auto;
    height: 80%;
    margin-top: 5px;
    ::-webkit-scrollbar {
      background-color: ${mainColor};
      width: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${quintenaryColor};
      border-radius: 5px;
    }
  }

  p {
    color: green;
    margin-top: 10px;
    cursor: pointer;
    :hover {
      color: white;
      font-weight: 900;
    }
  }
`;
