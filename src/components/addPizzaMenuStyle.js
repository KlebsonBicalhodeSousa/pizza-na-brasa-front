import styled from "styled-components";
import { primaryColor } from "../constants/colors";

export const ContainerCard = styled.div`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translate(-50%);
  width: 15.625rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #4B2568;
  border-radius: 0.625rem;
  padding: 0 0.3125rem;
  h2 {
    color: white;
    text-align: center;
  }
  p {
    color: white;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageCard = styled.img`
  margin: 5px 0 5px;
`;
export const CardIngredients = styled.div`
  display: flex;
  width: auto;
  flex-wrap: wrap;
  align-items: center;
  p {
    margin-right: 5px;
    width: auto;
  }
`;

export const ConfirmButton = styled.button`
  margin: 5px 0 10px;
  padding: 10px;
  border-radius: 10px;
  font-size: 1.5rem;
  transition: 0.5s;
    :hover {
      color: #fff;
      background-color: ${primaryColor};
      font-weight: bold;
    }
    :active {
      position: relative;
      top: 5px;
    }
`;
