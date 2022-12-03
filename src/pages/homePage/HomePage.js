import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { MainContainer } from "./style";



function HomePage() {
    const navigate = useNavigate()
    return(
        <MainContainer>
            <Header back homeTitle/>
            <div>
                <h2>Pizzas para todos os gostos <br/>De vários sabores</h2>
            </div>
            

        </MainContainer>
    )
}

export default HomePage