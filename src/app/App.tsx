import {RouterProvider} from "react-router-dom";
import {router} from "./routes/router.tsx";
import {ChakraProvider} from "@chakra-ui/react";
import {theme} from "../shared/theme";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={theme}>
                <RouterProvider router={router}/>
            </ChakraProvider>
        </QueryClientProvider>
    )
}

export default App
