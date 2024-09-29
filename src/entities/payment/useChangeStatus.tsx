import {useMutation, useQueryClient} from "@tanstack/react-query";
import {IChangeStatusRequest, paymentService} from "../../shared/services/payment/payment.service.ts";

export const useChangeStatus = () => {
    const queryClient= useQueryClient()
    return useMutation({
        mutationFn: async (data: IChangeStatusRequest) => {
            const response = await paymentService.changeStatus(data)
            await queryClient.invalidateQueries({
                queryKey: ['get-all-payments']
            })
            return response
        },
    })
}