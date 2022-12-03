import React from "react";
import { Main } from "./cardOrderHistoryStyle";

const CardOrderHistory = ({ order }) => {
  const pizza = order.pizzas.map((pizza) => {
    return <p className="information">{pizza.name}</p>;
  });
  return (
    <Main>
      <p className="title">Pizza na Brasa</p>
      {pizza}
      <p className="information">
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(order.total)}
      </p>
    </Main>
  );
};

export default CardOrderHistory;
