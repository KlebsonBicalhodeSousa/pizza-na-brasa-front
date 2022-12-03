import axios from "axios";
import { useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { BASE_URL } from "../constants/baseUrl";
import { GlobalStateContext } from "../global/GlobalContex";
import { ContainerCard, ImageCard, CardIngredients, CardInfo, ConfirmButton } from "./addPizzaMenuStyle";

function AddPizzaToMenu() {
  const { ingredientsMenu, setIngredientsMenu, pizzaMenu, setPizzaMenu, setPopupAddPizzasMenu } =
    useContext(GlobalStateContext);
  
  const body = {
    name: pizzaMenu.name,
    price: pizzaMenu.price,
    imageUrl: pizzaMenu.imageUrl,
    ingredients: ingredientsMenu,
  };
  const token = localStorage.getItem("token");

  const confirmPizzaMenu = () => {
    axios
      .post(`${BASE_URL}/pizzas/insert-menu`, body, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        Swal.fire({
          title: res.data.message,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        setPopupAddPizzasMenu(false)
        setIngredientsMenu([]);
        setPizzaMenu({});
      })
      .catch((error) => {
        Swal.fire({
          title: error.response.data.message,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        setPopupAddPizzasMenu(false)
        setIngredientsMenu([]);
        setPizzaMenu({});
      });
  };

  const ingredients =
    ingredientsMenu &&
    ingredientsMenu.map((ingredient) => {
      return <p key={ingredient.name}>{ingredient.name}; </p>;
    });

  return (
    <ContainerCard>
      <h2>Pizza</h2>
        <p>{pizzaMenu.name}</p>
      <CardInfo>
        <ImageCard src={pizzaMenu.imageUrl} />
        <p>{pizzaMenu.price}</p>
        <CardIngredients>{ingredients}</CardIngredients>
      </CardInfo>
        <ConfirmButton onClick={confirmPizzaMenu}>Confirmar</ConfirmButton>
    </ContainerCard>
  );
}

export default AddPizzaToMenu;
