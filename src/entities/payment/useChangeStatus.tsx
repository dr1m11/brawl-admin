import {QueryClient, useMutation} from "@tanstack/react-query";
import {IChangeStatusRequest, paymentService} from "../../shared/services/payment/payment.service.ts";

export const useChangeStatus = () => {
    const queryClient= new QueryClient()
    return useMutation({
        mutationFn: (data: IChangeStatusRequest) => paymentService.changeStatus(data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['get-all-payments']
            })
        }
    })
}