import {Box, Stack} from "@chakra-ui/react";
import styles from './authLayout.module.css'
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {getAccessToken} from "../../../shared/services/api.ts";

interface IAuthLayoutProps {
    children: React.ReactNode;
}

export const AuthLayout = ({children}: IAuthLayoutProps) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (getAccessToken()) navigate('/')
    })

    return (
        <Box
            className={styles.root}
        >
            <Stack className={styles.wrapper}>
                {children}
            </Stack>
        </Box>
    )
}