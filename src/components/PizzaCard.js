import { useContext } from "react";
import { GlobalStateContext } from "../global/GlobalContex";
import {
  AddCartButton,
  Container,
  ContainerButton,
  ImageCard,
  Ingrdients
} from "./pizzaCardStyle";

function PizzaCard({ pizza }) {
  const { addToCart, priceFormated } =
    useContext(GlobalStateContext);
  return (
    <Container>
      <h3>{pizza.name}</h3>
      <ImageCard src={pizza.imageUrl} alt="Imagen de pizza" />
      <p className="card-price">{priceFormated(pizza.price)}</p>
      <Ingrdients>
        {pizza.ingredients.map((item) => {
          return <span key={item}>{item}; </span>;
        })}
      </Ingrdients>
      <ContainerButton>
        <AddCartButton onClick={() => addToCart(pizza)} />
      </ContainerButton>
    </Container>
  );
}

export default PizzaCard;
