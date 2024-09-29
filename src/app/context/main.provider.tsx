import { PropsWithChildren, useMemo, useState } from 'react';
import {MainContextActions, MainContextValues} from "./main.context.ts";


export function MainProvider({ children }: PropsWithChildren) {
    const [token, setToken] = useState('');

    const values = useMemo(() => (
            { token }
        ),
        [token]);

    const actions = useMemo(() => (
            { setToken }
        ),
        [setToken]);
    return (
        <MainContextActions.Provider value={actions}>
            <MainContextValues.Provider value={values}>
                {children}
            </MainContextValues.Provider>
        </MainContextActions.Provider>
    );
}