import {createBrowserRouter, Navigate} from "react-router-dom";
import {Auth} from "../../pages/auth/auth.tsx";
import {MainPage} from "../../pages/main/mainPage.tsx";
import {Header} from "../../widgets/header/header.tsx";
import {CardPage} from "../../pages/card/cardPage.tsx";

export const router = createBrowserRouter([
    {
        element: <Header />,
        children: [
            {path: '/', element: <MainPage />},
            {path: '/card', element: <CardPage />},
        ]
    },
    {
        path: '/auth',
        element: <Auth/>
    },
    {
        path: '*',
        element: <Navigate to={'/'} />
    }
])