import axios from "axios"
import { useEffect, useState } from "react"

export const useRequestData = (initialState, url) => {

    const [data, setData] = useState(initialState)
    const token = localStorage.getItem("token")

    const getData = async () => {
        await axios.get(url, {
            headers: {
                Authorization: token
            }
        })
        .then((response) => {
            setData(response.data)
        })
        .catch((error) => {
            alert(error.response.data.message)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return data
}