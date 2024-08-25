import axios from "axios";


export const instance = axios.create({
    baseURL: import.meta.env.VITE_PRODUCT_API,
    timeout: 3600*24,
    headers: {'Content-Type': 'application/json'}
});


export const authApi = axios.create({
    baseURL: import.meta.env.VITE_LOGIN_API,
    timeout: 3600*24,
    headers: {'Content-Type': 'application/json'}
});

export const leadApi = axios.create({
    baseURL: import.meta.env.VITE_LEADS_API,
    timeout: 3600*24,
    headers: {'Content-Type': 'application/json'}
});

 