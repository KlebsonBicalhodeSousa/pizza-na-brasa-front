import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import HomeIcon from "@mui/icons-material/Home";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import { primaryColor, tertiaryColor } from "../constants/colors";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const ContainerHeader = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 130px;
  i {
    width: 60px;
    font-size: 3rem;
    text-align: center;
    cursor: pointer;
    color: ${primaryColor};
    :hover {
      color: ${tertiaryColor};
      box-shadow: #ffffff 0 6px 0;
    }
    :active {
      top: 55%;
      box-shadow: none;
    }
    @media (min-width: 300px) and (max-width: 501px) {
      font-size: 2rem;
    }
    @media (min-width: 501px) and (max-width: 900px) {
      font-size: 2.5rem;
    }
  }
  @media (min-width: 300px) and (max-width: 501px) {
    flex-direction: column;
    height: 180px;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media (min-width: 500px) and (max-width: 900px) {
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: ${tertiaryColor};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  @media (min-width: 300px) and (max-width: 501px) {
    font-size: 1.5rem;
  }
  @media (min-width: 500px) and (max-width: 900px) {
    font-size: 2rem;
  }
`;

export const TitleHome = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: ${tertiaryColor};
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -70%);
  width: auto;
  @media (min-width: 300px) and (max-width: 501px) {
    font-size: 1.5rem;
  }
`;

export const DivContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
  gap: 30px;
  max-width: 300px;
  width: auto;
  position: absolute;
  right: 5px;
  @media (min-width: 300px) and (max-width: 500px) {
    top: 10px;
    right: 40%;
    transform: translatex(60%);
    gap: 10px;
  }
  @media (min-width: 501px) and (max-width: 900px) {
    /* position: unset;
      width: 100%; */
  }
`;

export const TotalContainer = styled.div`
  display: flex;
  position: absolute;
  top: 85%;
  right: 5px;
  transform: translatey(-18%);
  width: 150px;
  p {
    color: #fafaf7;
    text-align: end;
  }
  @media (min-width: 300px) and (max-width: 500px) {
    top: 36%;
    transform: translatey(-64%);
    right: 10px;
  }
  @media (min-width: 501px) and (max-width: 900px) {
    /* position: unset; */
  }
`;

export const ImgLogo = styled.img`
  width: 10%;
  margin-left: 0.3125rem;
  position: absolute;
  top: 50%;
  bottom: 50%;
  left: 3%;
  transform: translateY(-50%);
  border-radius: 25%;

  @media (min-width: 300px) and (max-width: 500px) {
    width: 4rem;
    top: 30%;
    left: 7%;
    transform: translateY(-70%);
  }
  @media (min-width: 501px) and (max-width: 900px) {
    /* width: 5rem; */
  }
`;

export const LoginButton = styled.button`
  background-color: transparent;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translatey(-50%);
  width: 6.5rem;
  height: 3.125rem;
  padding: 0.625rem 0.313rem;
  margin-right: 1.25rem;
  font-size: 1.5rem;
  border: none;
  color: ${tertiaryColor};
  cursor: pointer;
  :hover {
    border-radius: 0.938rem;
    font-weight: 700;
    box-shadow: rgb(208, 4, 4) 0px 0px 37px 10px;
    -webkit-box-shadow: rgb(208, 4, 4) 0px 0px 37px 10px;
    -moz-box-shadow: rgb(208, 4, 4) 0px 0px 37px 10px;
  }

  :active {
    top: 55%;
  }
  @media (min-width: 300px) and (max-width: 500px) {
    font-size: 1rem;
    top: 20%;
    right: 0;
    transform: translatey(-80%);
    color: ${primaryColor};
    width: auto;
    :active {
      top: 20%;
    }
  }
`;
export const SignupButton = styled.button`
  background-color: transparent;
  position: absolute;
  top: 50%;
  right: 7.5rem;
  transform: translateY(-50%);
  width: 10rem;
  height: 3.125rem;
  padding: 0.625rem 0.313rem;
  margin: auto 10px auto;
  font-size: 1.5rem;
  color: ${tertiaryColor};
  border: none;  
  :hover {
    border-radius: 0.938rem;
    font-weight: 700;
    box-shadow: rgb(208, 4, 4) 0px 0px 37px 10px;
    -webkit-box-shadow: rgb(208, 4, 4) 0px 0px 37px 10px;
    -moz-box-shadow: rgb(208, 4, 4) 0px 0px 37px 10px;
  }
  :active {
    top: 55%;
  }

  @media (min-width: 300px) and (max-width: 500px) {
    font-size: 1rem;
    top: 20%;
    right: 20%;
    transform: translatey(-80%);
    color: ${primaryColor};
    width: auto;
    :active {
      top: 20%;
    }
  }
`;

export const LogoutButton = styled(LogoutSharpIcon)`
  && {
    cursor: pointer;
    font-size: 3rem;
    color: ${primaryColor};
    :hover {
      box-shadow: 0 10px 10px;
      color: #fff;
    }

    :active {
      top: 55%;
      box-shadow: none;
    }

    @media (min-width: 300px) and (max-width: 500px) {
      font-size: 2rem;
      margin: auto 5px;
    }
    @media (min-width: 500px) and (max-width: 900px) {
      font-size: 2.5rem;
    }
  }
`;

export const GoToHome = styled(HomeIcon)`
  && {
    cursor: pointer;
    font-size: 3rem;
    color: ${primaryColor};
    :hover {
      box-shadow: 0 10px 10px;
      color: #fff;
    }

    :active {
      top: 55%;
      box-shadow: none;
    }

    @media (min-width: 300px) and (max-width: 500px) {
      font-size: 2rem;
      margin: auto 5px;
    }
    @media (min-width: 500px) and (max-width: 900px) {
      font-size: 2.5rem;
    }
  }
`;

export const GoTOBack = styled(ArrowBackIosNewIcon)`
  && {
    cursor: pointer;
    font-size: 2rem;
    color: ${tertiaryColor};
    :hover {
      font-size: 2.5rem;
      box-shadow: 0 5px 0;
    }

    :active {
      position: relative;
      top: 5px;
      box-shadow: none;
    }
    @media (min-width: 300px) and (max-width: 500px) {
      font-size: 1.5rem;
      position: absolute;
      left: 0;
      top: 10px;
      :active {
        position: absolute;
        top: 12px;
      }
    }
  }
`;

export const GoToProfile = styled(AccountCircleIcon)`
  && {
    cursor: pointer;
    font-size: 3rem;
    color: ${primaryColor};
    :hover {
      box-shadow: 0 10px 10px;
      color: #fff;
    }

    :active {
      top: 55%;
      box-shadow: none;
    }

    @media (min-width: 300px) and (max-width: 500px) {
      font-size: 2rem;
      margin: auto 5px;
    }
    @media (min-width: 500px) and (max-width: 900px) {
      font-size: 2.5rem;
    }
  }
`;
