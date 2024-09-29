import {axiosDefault} from "../api.ts";

export interface IPaymentResponse {
    amount: number
    receipt_url: string
    status: string
    user_id: string
}

export interface IChangeStatusRequest {
    status: 'Approved' | 'Rejected'
    replenishment_id: string
}

export const paymentService = {
    getAllPayments() {
        return axiosDefault<IPaymentResponse[]>('/authenticated/own-replenishment')
    },

    changeStatus(data: IChangeStatusRequest) {
        const token = localStorage.getItem("token");
        return axiosDefault.post('/authenticated/own-replenishment/change-status', data, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
    }
}