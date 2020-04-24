import axios from 'axios'

export const axiosWithAuth = () => {
    const token = JSON.parse(localStorage.getItem("token"));

    return axios.ccreate({
        headers: {
            Authorization: token
        },
        baseURL: 'http://localhost:5000'
    })
}