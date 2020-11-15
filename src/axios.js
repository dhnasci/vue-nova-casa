import axios from 'axios'
import config from './config/config'

const instance = axios.create({
    baseUrl: config.apiURL,
    withCredentials: true,
})



export default instance