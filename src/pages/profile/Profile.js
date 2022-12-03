import React from "react";
import { useNavigate } from "react-router-dom";
import CardOrderHistory from "../../components/CardOrderHistory";
import { BASE_URL } from "../../constants/baseUrl";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";
import { goToAddressEdit, goToBack, goToProfileEdit } from "../../routes/coordinator";
import {
  AddressPerson,
  GoTOBack,
  HistoryPurchase,
  Information,
  Main,
  MainContainer,
  ProfileContainer,
  ProfilePerson,
} from "./style";

const Profile = () => {
  useProtectedPage();
  const person = useRequestData({}, `${BASE_URL}/user`)
  const order = useRequestData({}, `${BASE_URL}/orders`);

  const navigate = useNavigate();

  return (
    <MainContainer>
      <div>
        <GoTOBack onClick={() => goToBack(navigate)} />
      </div>
      
      <Main>
        <ProfileContainer>
          <h4 id="title">Meu Perfil</h4>
          </ProfileContainer>
        <Information>
          <ProfilePerson>
            <div>
              <p>Nome: {person.user && person.user.name}</p>
              <p>E-mail: {person.user && person.user.email}</p>
              <p>Cpf: {person.user && person.user.cpf}</p>
            </div>
            <div onClick={() => goToProfileEdit(navigate, person.user.id)}>
              Editar
            </div>
          </ProfilePerson>
          <AddressPerson>
            <div>
              <h4>Endereço de Entrega</h4>
              <p>{person.user && person.user.address}</p>
            </div>
            <div onClick={() => goToAddressEdit(navigate, person.user.id)}>
              Editar
            </div>
          </AddressPerson>
          <HistoryPurchase>
              <h4 id="history">Histórico de pedidos</h4>
            <div id="container-card">
            {order.orders && order.orders.length > 0 ?
              order.orders.map((order) => {
                return <CardOrderHistory order={order} />;
              }):<p>Você não realizou nehum pedido</p>}
            </div>
            
          </HistoryPurchase>
        </Information>
      </Main>
    </MainContainer>
  );
};

export default Profile;
