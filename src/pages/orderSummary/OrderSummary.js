import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import OrderItemCard from "../../components/OrderItemCard";
import OrderSuccessPopup from "../../components/OrderSuccessPopup";
import { BASE_URL } from "../../constants/baseUrl";
import { GlobalStateContext } from "../../global/GlobalContex";
import { useRequestData } from "../../hooks/useRequestData";
import { goToPizzasMenuPage } from "../../routes/coordinator";
import {
  ButtonConfirm,
  CartConfig,
  ContainerCart,
  ContainerForm,
  ContainerMain,
  ContainerTotal,
  GoTOBack,
  MainContainer,
  InfoProfile,
  InfoCart,
  Form,
} from "./style";

function OrderSummary() {
  const {
    cart,
    total,
    confirmOrder,
    orderSuccessPopupState,
    priceFormated,
    payment,
    setPayment,
  } = useContext(GlobalStateContext);

  const [paymentMethod] = useState(["dinheiro", "creditcard", "pix"]);

  const navigate = useNavigate();
  const person = useRequestData({}, `${BASE_URL}/user`);

  const onChangePayment = (event) => {
    setPayment(event.target.value);
  };

  const onSubmitConfirmOrder = (event) => {
    event.preventDefault();
    confirmOrder();
  };

  return (
    <MainContainer>
      {cart ? (
        <ContainerMain>
          <div>
            <GoTOBack onClick={() => goToPizzasMenuPage(navigate)} />
            <h1>Meu Carrinho</h1>
          </div>
          <CartConfig>
            <InfoProfile>
              <p>Endereço de entrega</p>
              <p>{person.user && person.user.address}</p>
            </InfoProfile>

            <ContainerCart>
              {cart.length > 0 ? (
                cart.map((pizza) => {
                  return <OrderItemCard key={pizza.name} pizza={pizza} />;
                })
              ) : (
                <InfoCart>
                  <p>Carrinho vazio</p>
                </InfoCart>
              )}
            </ContainerCart>
          </CartConfig>
          <ContainerTotal>
            <h2 id="total">Total: {priceFormated(total)}</h2>
          </ContainerTotal>
          <ContainerForm>
            <h2>Forma de pagamento</h2>
            <Form onSubmit={onSubmitConfirmOrder}>
              {paymentMethod.map((key) => {
                return (
                  <div key={key}>
                    <input
                      checked={payment === key}
                      name={"paymentMethod"}
                      id={key}
                      type={"radio"}
                      onChange={onChangePayment}
                      value={key}
                    />
                    <label>{key}</label>
                  </div>
                );
              })}
              <ButtonConfirm type="submit">Confirmar pedido</ButtonConfirm>
            </Form>
          </ContainerForm>
        </ContainerMain>
      ) : (
        <div>
          <h2>Carregando...</h2>
        </div>
      )}
      {orderSuccessPopupState.isActive && <OrderSuccessPopup />}
    </MainContainer>
  );
}

export default OrderSummary;
