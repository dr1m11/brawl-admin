import axios from 'axios';
import Cookies from "js-cookie";

export const getAccessToken = () => {
    const token = Cookies.get('token')
    return token || null
}

export const saveTokenStorage = (token: string) => {
    Cookies.set('token', token, {
        domain: '.admin.dododrop.ru',
        // domain: 'localhost',
        sameSite: 'strict',
        expires: 12 / 24
    })
}

export const removeFromStorage = () => {
    Cookies.remove('token', {domain: '.admin.dododrop.ru'})
    // Cookies.remove('token')
}

export const AuthHeaders = () => ({
    'Authorization': `Bearer ${getAccessToken()}`,
    'Content-Type': 'application/json',
})

export const axiosDefault = axios.create({
    baseURL: 'https://api.dododrop.ru',
    headers: AuthHeaders()
})

axiosDefault.interceptors.response.use((response) => response,
    error => {
        if (error.status === 401) {
            removeFromStorage()
            location.reload()
        }
    })