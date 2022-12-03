import styled from "styled-components";
import PizzasHome from "../../assets/Pizza_with_olive_and_onion.jpg";
import { mainColor, tertiaryColor } from "../../constants/colors";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  background-image: url(${PizzasHome});
  background-position: 100%;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 300px) and (max-width: 500px) {
    padding: 1.25rem;
  }

  @media (min-height: 300px) and (max-height: 500px) {
    height: 130vh;
  }
`;

export const Main = styled.div`
  position: absolute;
  top: 130px;
  padding: 0.625rem;
  width: 40%;
  height: 82vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid lightgray 1px;
  border-radius: 0.625rem;
  background-color: ${mainColor};
  opacity: 0.8;

  @media (min-width: 501px) and (max-width: 930px) {
    position: unset;
    margin-top: 10px;
  }

  @media (min-width: 300px) and (max-width: 500px) {
    position: unset;
    margin-top: 10px;
    width: auto;
  }

  @media (min-height: 300px) and (max-height: 500px) {
    position: unset;
    height: 90vh;
  }
`;

export const ProfileContainer = styled.div`
  height: 5%;
  border-bottom: solid 1px ${tertiaryColor};
  color: ${tertiaryColor};
  font-size: 1.2rem;
  font-weight: 900;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  #title {
    text-align: center;
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  height: 95%;
`;
export const ProfilePerson = styled.div`
  height: 20%;
  display: flex;
  justify-content: space-between;
  color: ${tertiaryColor};
  opacity: 1;
  div:nth-child(1) {
    width: 80%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  div:nth-child(2) {
    width: 20%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
    :hover {
      background-color: gray;
    }
  }
`;
export const AddressPerson = styled.div`
  height: 20%;
  margin-top: 10px;
  background-color: lightgray;
  display: flex;
  justify-content: space-between;

  div:nth-child(1) {
    width: 80%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  div:nth-child(2) {
    width: 20%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
    :hover {
      background-color: gray;
    }
  }
`;
export const HistoryPurchase = styled.div`
  height: 55%;
  color: ${mainColor};
  padding: 10px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  overflow: auto;
  background-color: lightgray;
  #history {
    text-align: center;
    padding-bottom: 10px;
    border-bottom: solid 1px #908e8e;
  }
  #container-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding-bottom: 10px;
    text-align: center;
    overflow: auto;
    border-bottom: solid 1px #908e8e;
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
        position: relative;
        top: 5px;
      }
    }
  }
`;
