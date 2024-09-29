import {useMutation} from "@tanstack/react-query";
import {AuthService} from "../../shared/services/auth/auth.service.ts";
import {IAuthRequest} from "../../shared/services/auth/auth.types.ts";
import {saveTokenStorage} from "../../shared/services/api.ts";

export const useLogin = () => {
    return useMutation({
        mutationFn: (data: IAuthRequest) => AuthService.login(data),
        onSuccess: (data) => {
            saveTokenStorage(data.data)
            location.reload()
        }
    })
}