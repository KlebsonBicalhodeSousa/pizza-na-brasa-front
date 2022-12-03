import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "../pages/homePage/HomePage"
import OrderSummary from "../pages/orderSummary/OrderSummary"
import PizzasMenuPage from "../pages/pizzasMenuPages.js/PizzasMenuPage"
import Login from "../pages/login/Login"
import SignUp from "../pages/signUp/SignUp"
import AdminPage from "../pages/adminPage/AdminPage"
import SignUpAddress from "../pages/signUpAddress/SignUpAddress"
import Profile from "../pages/profile/Profile"
import ProfileEdit from "../pages/profileEdit/ProfileEdit"
import AddressEdit from "../pages/addressEdit/AddressEdit"


const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path='/api/user/login' element={<Login/>}/>
                <Route path='/api/user/signup' element={<SignUp/>}/>
                <Route path='/api/user/address' element={<SignUpAddress/>}/>
                <Route path='/api/user/address-edit' element={<AddressEdit/>}/>
                <Route path='/api/user/admin' element={<AdminPage/>}/>
                <Route path='/api/pizzas/menu' element={<PizzasMenuPage/>}/>
                <Route path='/api/orders' element={<OrderSummary/>}/>
                <Route path='/api/user' element={<Profile/>}/>
                <Route path='/api/user-edit' element={<ProfileEdit/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router