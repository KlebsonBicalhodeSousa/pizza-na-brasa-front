import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import restaurant from "./../../assets/restaurant.jpg";

export const MainContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: baseline;
  justify-content: center;
  background-image: url(${restaurant});
  background-position: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const ContainerMain = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  max-width: 80%;
  max-height: 80vh;
  padding: 3% 4%;
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  background-color: #fffafa5e;
  border-radius: 12px;
  border: 1px solid #d1d5db4d;

  @media (min-width: 280px) and (max-width: 500px) {
    width: 90%;
    max-height: 95%;
    overflow: auto;
  }

  @media (min-width: 501px) and (max-width: 980px) {
    overflow: auto;
    ::-webkit-scrollbar {
    background-color: transparent;
  }
  }

  h1 {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 15px;
  }
`;

export const GoTOBack = styled(ArrowBackIosNewIcon)`
  && {
    cursor: pointer;
    border-radius: 50%;
    font-size: 2rem;
    :hover {
      color: #f5f5fb;
      background-color: #f13c3c;
      box-shadow: 0 5px 0;
    }

    :active {
      position: relative;
      top: 5px;
      box-shadow: none;
    }
  }
`;

export const CartConfig = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
export const InfoProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
  width: auto;
  margin-bottom: 10px;
`;
export const InfoCart = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 10px 0;
  width: 100%;
  p {
    text-align: center;
    font-size: 1.5rem;
  }
`;

export const ContainerCart = styled.div`
  overflow: auto;
  max-height: 500px;

  ::-webkit-scrollbar {
    background-color: transparent;
  }
  @media (min-width: 300px) and (max-width: 501px) {
    max-height: 340px;
  }
`;

export const ContainerTotal = styled.div`
  #frete {
    text-align: end;
  }
  #total {
    text-align: end;
    margin-top: 10px;
  }
`;
export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #fbfdff80;
`;
export const Form = styled.form`
  padding: 10px;
`;

export const ButtonConfirm = styled.button`
  margin-top: 0.625rem;
  width: 12.5rem;
  font-size: 1.5rem;
  align-self: flex-start;
  color: blue;
  background-color: transparent;
  border: none;
  border-bottom: blue solid 0.125rem;
  cursor: pointer;

  :hover {
    font-weight: bolder;
    border-bottom: blue solid 0.25rem;
    margin-top: 0.5rem;
  }

  :active {
    position: relative;
    top: 5px;
  }
`;
