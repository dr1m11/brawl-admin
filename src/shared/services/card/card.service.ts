import {axiosDefault} from "../api.ts";

export interface ICard {
    number: string
    name: string
    bank: string
    type: string | undefined
}

export const cardService = {
    async getCard() {
        const response = await axiosDefault<ICard>('/card')
        return response.data
    },

    updateCard(data: ICard) {
        return axiosDefault.post('/authenticated/update-card', data)
    }
}