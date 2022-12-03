import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { BASE_URL } from "../constants/baseUrl";
import { useRequestData } from "../hooks/useRequestData";
import { GlobalStateContext } from "./GlobalContex";

const GlobalState = ({ children }) => {
  const [popupAddPizzasMenu, setPopupAddPizzasMenu] = useState(false);
  const [ingredientsMenu, setIngredientsMenu] = useState([]);
  const [pizzaMenu, setPizzaMenu] = useState({});
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [payment, setPayment] = useState('')
  const [orderSuccessPopupState, setOrderSuccessPopupState] = useState({
    isActive: false,
    summary: {
      id: null,
      pizzas: null,
      total: null,
    },    
  })

  // Vizualizar pizzas no menu

  useEffect(() => {
    axios
      .get(`${BASE_URL}/pizzas/menu`)
      .then((res) => {
        setPizzas(res.data.pizzas);
      })
      .catch((error) => {
        Swal.fire({
          title: error.response.message,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      });
  }, [pizzas]);

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  // Preparar pizza para o menu

  const addIngredientToMenu = (addToMenu) => {
    
      const foundIndex = ingredientsMenu.findIndex(
        (ingredentInIngredientsMenu) => ingredentInIngredientsMenu.name === addToMenu.name
      );
  
      if (foundIndex < 0) {
        const newIngredientsMenu = [...ingredientsMenu];
        const newIngredients = {name: addToMenu.name}
        newIngredientsMenu.push(newIngredients)
  
        setIngredientsMenu(newIngredientsMenu);
      } else {alert("Ingrediente já inserido")}
  }
  
  const addPizzaToMenu = (addToMenu) => {
    setPopupAddPizzasMenu(true)
    if (addToMenu) {
      setPizzaMenu({
        name: addToMenu.name,
        price: addToMenu.price,
        imageUrl: addToMenu.imageUrl
      });
    }
  };

  // Adicionar itens no carrinho

  const addToCart = (pizzaToAdd) => {
    const foundIndex = cart.findIndex(
      (pizzaInCart) => pizzaInCart.name === pizzaToAdd.name
    );

    if (foundIndex >= 0) {
      const newCart = [...cart];
      newCart[foundIndex].quantity += 1;

      setCart(newCart);
    } else {
      const newCart = [...cart];
      const newPizza = {
        name: pizzaToAdd.name,
        price: pizzaToAdd.price,
        imageUrl: pizzaToAdd.imageUrl,
        quantity: 1,
      };

      newCart.push(newPizza);
      setCart(newCart);
    }
  };

  // Remover itens do carrinho

  const remoFromCart = (pizzaToRemove) => {
    if (pizzaToRemove.quantity > 1) {
      const newCart = cart.map((pizza) => {
        if (pizza.name === pizzaToRemove.name) {
          pizza.quantity -= 1;
        }
        return pizza;
      });

      setCart(newCart);
    } else {
      const newCart = cart.filter((pizza) => {
        return pizza.name !== pizzaToRemove.name;
      });
      setCart(newCart);
    }
  };

  // Calcular total da compra

  const calculateTotal = () => {
    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(total);
  };

  // Enviando confirmação da compra para o banco de dados

  const confirmOrder = async () => {
    const token = localStorage.getItem("token")
    try {
      const body = {
        pizzas: cart,
        paymentMethod: payment
      };
      const res = await axios.post(`${BASE_URL}/orders/create`, body, {
        headers: {
          Authorization: token,
        },
      });
      setOrderSuccessPopupState({
        isActive: true,
        summary: res.data
      });
      setPayment("")
      setCart([]);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  // Formatando o preço

  const priceFormated = (price) => {
    const formated = price.toLocaleString("pt-br", {
      style: "currency",
      currency: "USD",
    });
    return formated;
  };

  // Fechar tela de informações de confirmação de compra

  const closePopup = () => {
    setOrderSuccessPopupState({
      isActive: false,
      summary: {
        id: null,
        pizzas: null,
        total: null,
      },
    });
  };

  const data = {
    pizzas,
    addToCart,
    cart,
    remoFromCart,
    calculateTotal,
    total,
    confirmOrder,
    orderSuccessPopupState,
    closePopup,
    priceFormated,
    addIngredientToMenu,
    addPizzaToMenu,
    ingredientsMenu,
    setIngredientsMenu,
    pizzaMenu,
    setPizzaMenu,
    setPopupAddPizzasMenu,
    popupAddPizzasMenu,
    payment, 
    setPayment
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
