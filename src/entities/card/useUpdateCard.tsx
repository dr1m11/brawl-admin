import {QueryClient, useMutation} from "@tanstack/react-query";
import {cardService, ICard} from "../../shared/services/card/card.service.ts";

export const useUpdateCard = () => {
    const queryClient= new QueryClient()
    return useMutation({
        mutationFn: (data: ICard) => cardService.updateCard(data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['get-card']
            })
        }
    })
}