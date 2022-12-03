export const goToHomePage = (navigate) => {
    navigate('/')
}
export const goToAdminPage = (navigate) => {
    navigate('/api/user/admin')
}
export const goToPizzasMenuPage = (navigate) => {
    navigate('/api/pizzas/menu')
}
export const goToBack = (navigate) => {
    navigate(-1)
}
export const goToSignUp = (navigate) => {
    navigate('/api/user/signup')
}
export const goToSignUpAddress = (navigate) => {
    navigate('/api/user/address')
}
export const goToLogin = (navigate) => {
    navigate('/api/user/login')
}

export const goToOrderSummaryCard = (navigate) => {
    navigate('/api/orders')
}

export const goToProfile = (navigate) => {
    navigate('/api/user')
}

export const goToProfileEdit = (navigate) => {
    navigate(`/api/user-edit`)
}

export const goToAddressEdit = (navigate) => {
    navigate(`/api/user/address-edit`)
}