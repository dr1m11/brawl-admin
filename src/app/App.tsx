import {RouterProvider} from "react-router-dom";
import {router} from "./routes/router.tsx";
import {ChakraProvider} from "@chakra-ui/react";
import {theme} from "../shared/theme";
import {MainProvider} from "./context/main.provider.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <MainProvider>
                <ChakraProvider theme={theme}>
                    <RouterProvider router={router}/>
                </ChakraProvider>
            </MainProvider>
        </QueryClientProvider>
    )
}

export default App
