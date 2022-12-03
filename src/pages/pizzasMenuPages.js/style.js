import styled from "styled-components";

export const ContainerSection = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-height: 100vh;
  background-color: black;
  ul {
    overflow: auto;
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    justify-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 75vh;
    ::-webkit-scrollbar {
      background-color: transparent;
    }
    button {
      width: auto;
      padding: 5px;
      height: 30px;
    }
  }

  @media (min-width: 300px) and (max-width: 500px) {
    ul {
      margin-top: 20px;
      overflow: auto;
      gap: 10px;
      width: 100%;      
    }
  }

  @media (min-width: 501px) and (max-width: 900px) {
    ul {
      display: flex;
      justify-content: space-around;
    }
  }
`;

export const InputSearch = styled.input`
  width: 20%;
  padding: 10px;
  margin: 150px 0 0 10px;
  border-radius: 25px;

  @media (min-width: 300px) and (max-width: 500px) {
    width: 80%;
    margin-top: 150px;
    align-self: center;

  }
`;
