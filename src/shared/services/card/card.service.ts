import {axiosDefault} from "../api.ts";

export interface ICard {
    number: string
    name: string
    bank: string
}

export const cardService = {
    async getCard() {
        const response = await axiosDefault<ICard>('/card')
        return response.data
    },

    updateCard(data: ICard) {
        const token = localStorage.getItem("token");
        return axiosDefault.post('/authenticated/update-card', data, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
    }
}