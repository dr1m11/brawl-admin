import {useQuery} from "@tanstack/react-query";
import {cardService} from "../../shared/services/card/card.service.ts";

export const useGetCard = () => {
    const response = useQuery({
        queryKey: ['get-card'],
        queryFn: cardService.getCard,
        retry: false,
        staleTime: 0,
    })

    return response ?? null
}