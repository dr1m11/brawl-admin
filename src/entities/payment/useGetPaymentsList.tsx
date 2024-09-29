import {useQuery} from "@tanstack/react-query";
import {paymentService} from "../../shared/services/payment/payment.service.ts";

export const useGetPaymentsList = () => {
    const response = useQuery({
        queryKey: ['get-all-payments'],
        queryFn: paymentService.getAllPayments,
    })

    return response.data ? response.data.data : []
}