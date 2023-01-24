import axios from "axios";

export const API = axios.create({ baseURL: 'https://dosty-pet-server-prod.herokuapp.com' })