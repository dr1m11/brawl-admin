import axios from "axios";
import {API_URL} from "../../constants/api.ts";
import {IAuthRequest, IAuthResponse} from "./auth.types.ts";

export const AuthService = {
    login(data: IAuthRequest) {
        return axios.post<IAuthResponse>(`${API_URL}/admin/sign-in`, data)
    }
}