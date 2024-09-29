import {axiosDefault} from "../api.ts";

export interface IPaymentResponse {
    amount: number
    receipt_url: string
    status: 'Approved' | 'Rejected' | 'Processing'
    user_id: string
    id: number
}

export interface IChangeStatusRequest {
    status: 'Approved' | 'Rejected'
    replenishment_id: number
}

export const paymentService = {
    getAllPayments() {
        return axiosDefault<IPaymentResponse[]>('/authenticated/own-replenishment')
    },

    changeStatus(data: IChangeStatusRequest) {
        return axiosDefault.post('/authenticated/own-replenishment/change-status', data)
    }
}