import {createContext} from "react";

interface MainContextValuesTypes {
    token: string
}

interface MainContextActionsTypes {
    setToken: (value: string) => void
}

export const MainContextValues = createContext<MainContextValuesTypes | null>(null)
export const MainContextActions = createContext<MainContextActionsTypes | null>(null)