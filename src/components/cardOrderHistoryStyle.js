import styled from "styled-components";
import { mainColor, primaryColor } from "../constants/colors";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px ${mainColor};
  
  border-radius: 5px;
  padding: 10px;
  gap: 5px;
  width: 70%;
  min-width: 260px;
  text-align: center;
  .title {
    color: ${primaryColor};
    font-weight: 900;
    font-size: 1.2rem;
  }
  .information{
    font-weight: bold;
    font-size: 1rem;
  }
  /* @media (min-width: 300px) and (max-width: 500px) {
    width: 200px;
  } */
`;
