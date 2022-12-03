import React, { useContext, useState } from "react";
import Header from "../../components/Header";
import PizzaCard from "../../components/PizzaCard";
import { GlobalStateContext } from "../../global/GlobalContex";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { ContainerSection, InputSearch } from "./style";

function PizzasMenuPage() {
  useProtectedPage();

  const { pizzas } = useContext(GlobalStateContext);
  const [inputText, setInputText] = useState("");

  const menuPizzas = pizzas
    .filter((pizza) =>
      inputText
        ? pizza.name.toLowerCase().includes(inputText.toLocaleLowerCase())
        : true
    )
    .map((pizza) => {
      return <PizzaCard key={pizza.name} pizza={pizza} />;
    });
    
  return (
    <ContainerSection>
      <Header title back2 back3 back4 back5 pizza={menuPizzas}/>
      <InputSearch
        placeholder="Pesquisa"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
      />
      <ul>{menuPizzas}</ul>   
    </ContainerSection>
  );
}

export default PizzasMenuPage;
