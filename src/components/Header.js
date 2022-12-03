import {
  ButtonCart,
  TotalContainer,
  ContainerHeader,
  GoTOBack,
  GoToHome,
  GoToProfile,
  ImgLogo,
  LoginButton,
  LogoutButton,
  SignupButton,
  DivContainerButton,
  TitleHome,
  Title,
} from "./headerStyle";
import { useNavigate } from "react-router-dom";
import {
  goToAdminPage,
  goToBack,
  goToHomePage,
  goToLogin,
  goToOrderSummaryCard,
  goToPizzasMenuPage,
  goToProfile,
  goToSignUp,
} from "../routes/coordinator";
import pizzaLogo from "./../assets/pizzaLogo.png";
import { useContext } from "react";
import { GlobalStateContext } from "../global/GlobalContex";

function Header({ back, back2, back3, back4, back5, homeTitle, title }) {
  const { total, priceFormated } = useContext(GlobalStateContext);

  const navigate = useNavigate();

  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    goToHomePage(navigate);
  };

  const correctLogin = (role) => {
    if (role === "ADMIN") {
      goToAdminPage(navigate);
    } else {
      goToPizzasMenuPage(navigate);
    }
  };

  return (
    <ContainerHeader>
      {back4 && <GoTOBack onClick={() => goToBack(navigate)} />}
      <ImgLogo src={pizzaLogo} alt="Fornália de pizza" />
      {homeTitle && <TitleHome>Pizza na Brasa</TitleHome>}
      {title && <Title>Pizza na Brasa</Title>}
        {back && (
          <SignupButton onClick={() => goToSignUp(navigate)}>
            Sign-Up
          </SignupButton>
        )}
        {token
          ? back && (
              <LoginButton onClick={() => correctLogin(role)}>
                Login
              </LoginButton>
            )
          : back && (
              <LoginButton onClick={() => goToLogin(navigate)}>
                Login
              </LoginButton>
            )}
      {back5 && <DivContainerButton>

        {back3 && <GoToProfile onClick={() => goToProfile(navigate)} />}
        {back2 && <GoToHome onClick={() => goToHomePage(navigate)} />}
        {back2 && <LogoutButton onClick={logout} />}
        {back3 && (
          <i
            className="bi bi-cart-check"
            onClick={() => goToOrderSummaryCard(navigate)}
          ></i>
        )}
      </DivContainerButton>}
      {back3 && (
        <TotalContainer>
          {total > 0 ? <p>{priceFormated(total)}</p> : <></>}
        </TotalContainer>
      )}
    </ContainerHeader>
  );
}
export default Header;
