import {useQuery} from "@tanstack/react-query";
import {paymentService} from "../../shared/services/payment/payment.service.ts";

export const useGetPaymentsList = () => {
    const response = useQuery({
        queryKey: ['get-all-payments'],
        queryFn: paymentService.getAllPayments,
        retry: false,
        staleTime: 0,
    })

    return response.data ? response.data.data : []
}