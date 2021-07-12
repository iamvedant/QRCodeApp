import axios from 'axios'

const baseAxios = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_PATH
})

export default baseAxios;