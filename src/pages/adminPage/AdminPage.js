import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AddPizzaToMenu from "../../components/AddPizzaToMenu";
import Header from "../../components/Header";
import { BASE_URL } from "../../constants/baseUrl";
import { GlobalStateContext } from "../../global/GlobalContex";
import { useForm } from "../../hooks/useForm";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { goToPizzasMenuPage } from "../../routes/coordinator";
import {
  AddRemove,
  ButtonStyled,
  Card,
  ContainerCard,
  ContainerForm,
  ContainerIngredients,
  FormIngrediente,
  FormPizza,
  ImageCard,
  Main,
  MainContainer,
  MenuButton,
  ShowInput,
} from "./style";

function AdminPage() {
  useProtectedPage();

  const {
    priceFormated,
    addPizzaToMenu,
    addIngredientToMenu,
    popupAddPizzasMenu,
  } = useContext(GlobalStateContext);
  const { form, onChangeForm, clear } = useForm({
    name: "",
    price: "",
    imageUrl: "",
    ingredientName: "",
  });
  const [ingredientsDB, setIngredientsDB] = useState([]);
  const [pizzasDB, setPizzasDB] = useState([]);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // Visualizar pizzas disponíveis

  useEffect(() => {
    getPizzas();
  }, [pizzasDB]);

  const getPizzas = () => {
    axios
      .get(`${BASE_URL}/pizzas`)
      .then((res) => {
        setPizzasDB(res.data.pizzas);
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
  };

  useEffect(() => {
    getIngredients();
  }, [ingredientsDB]);

  const getIngredients = () => {
    axios
      .get(`${BASE_URL}/pizzas/ingredients`)
      .then((res) => {
        setIngredientsDB(res.data);
      })
      .catch((error) => {
        Swal.fire({
          title: error.response,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      });
  };

  // Inserir pizza disponível

  const insertPizza = async () => {
    const body = {
      name: form.name,
      price: form.price,
      imageUrl: form.imageUrl,
    };

    await axios
      .post(`${BASE_URL}/pizzas/insert`, body, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        clear();
        Swal.fire({
          title: res.data.message,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
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
      });
  };

  const onSubmitPizzas = (event) => {
    event.preventDefault();
    insertPizza();
  };

  const insertIngredients = async () => {
    const body = {
      ingredientName: form.ingredientName,
    };

    await axios
      .post(`${BASE_URL}/pizzas/insert-ingredinets`, body, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        clear();
        Swal.fire({
          title: res.data.message,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
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
      });
  };

  const onSubmitIngredients = (event) => {
    event.preventDefault();
    insertIngredients();
  };

  const deletePizza = async (name) => {
    if (
      window.confirm(`Esta ação excluirá a pizza ${name} do menu e do painel!`)
    ) {
      const body = {
        data: {
          name,
        },
      };
      await axios
        .delete(`${BASE_URL}/pizzas/delete`, body)
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
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.response.data.message,
            footer: '<a href="">Why do I have this issue?</a>',
          });
        });
    }
  };

  const pizzaDB =
    pizzasDB &&
    pizzasDB.map((pizza) => {
      return (
        <Card key={pizza.name}>
          <h3>{pizza.name}</h3>
          <ImageCard src={pizza.imageUrl} />
          <p className="card-price">{priceFormated(pizza.price)}</p>
          <AddRemove>
            <i
              className="bi bi-plus-circle-fill"
              onClick={() => addPizzaToMenu(pizza)}
            ></i>
            <i
              className="bi bi-x-circle"
              onClick={() => deletePizza(pizza.name)}
            ></i>
          </AddRemove>
        </Card>
      );
    });

  const ingredientDB =
    ingredientsDB &&
    ingredientsDB.map((ingredient) => {
      return (
        <p
          key={ingredient.name}
          onClick={() => addIngredientToMenu(ingredient)}
        >
          {ingredient.name}
        </p>
      );
    });

  return (
    <MainContainer>
      <Header back2 back5 />
      <Main>
        <h2>Inserir Pizzas e Ingredientes no Painel</h2>
        <MenuButton onClick={() => goToPizzasMenuPage(navigate)} />
        <ContainerForm>
          <FormPizza onSubmit={onSubmitPizzas}>
            <ShowInput
              id="outlined-basic"
              label={"Pizza"}
              name="name"
              type={"text"}
              placeholder={"Nome da Pizza"}
              variant="outlined"
              value={form.name}
              onChange={onChangeForm}
              required
            />
            <ShowInput
              id="outlined-basic"
              label={"Preço"}
              name="price"
              type={"number"}
              placeholder={"Digite um valor"}
              variant="outlined"
              value={form.price}
              onChange={onChangeForm}
              required
            />
            <ShowInput
              id="outlined-basic"
              label={"Imagem"}
              name="imageUrl"
              type={"text"}
              placeholder={"Digite a url da imagem"}
              variant="outlined"
              value={form.imageUrl}
              onChange={onChangeForm}
              required
            />
            <ButtonStyled type="submit">Adicionar</ButtonStyled>
          </FormPizza>
          <FormIngrediente onSubmit={onSubmitIngredients}>
            <ShowInput
              id="outlined-basic"
              label="Ingrediente"
              name={"ingredientName"}
              type={"text"}
              placeholder={"Ingrediente"}
              variant="outlined"
              value={form.ingredientName}
              onChange={onChangeForm}
              required
            />
            <ButtonStyled type="submit">Adicionar</ButtonStyled>
          </FormIngrediente>
        </ContainerForm>
        <h2>Painel</h2>
        <ContainerCard>
          {pizzaDB}
          <ContainerIngredients>
            <h3>Ingredientes:</h3>
            <div id="card-ingredients">
              {ingredientDB}
            </div>            
          </ContainerIngredients>
        </ContainerCard>
      </Main>
      {popupAddPizzasMenu ? <AddPizzaToMenu /> : <></>}
    </MainContainer>
  );
}

export default AdminPage;
