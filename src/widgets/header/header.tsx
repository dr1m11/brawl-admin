import {Button, Heading, HStack, Stack} from "@chakra-ui/react";
import {Link, Outlet, useLocation} from "react-router-dom";
import {removeFromStorage} from "../../shared/services/api.ts";

export const Header = () => {
    const onLogout = () => {
        removeFromStorage()
        location.reload()
    }

    const {pathname} = useLocation()

    return (
        <Stack width="100%" height="100%" py={4}>
            <Stack
                width="100%"
                maxWidth={'1000px'}
                mx={'auto'}
                my={'10px'}
                border={'1px solid #cdcdcd'}
                height={'100%'}
                borderRadius={12}
                padding={'12px'}
            >
                <HStack justifyContent={'space-between'}>
                    <HStack gap={'16px'}>
                        <Link to={'/'}>
                            <Heading
                                as="h1"
                                fontSize="2xl"
                                fontWeight={'500'}
                                borderBottom={pathname === '/' ? '1px solid black' : ''}
                                opacity={pathname === '/' ? 1 : 0.5}
                            >
                                Список платежей
                            </Heading>
                        </Link>
                        <Link to={'/card'}>
                            <Heading
                                as="h1"
                                fontSize="2xl"
                                fontWeight={'500'}
                                borderBottom={pathname === '/card' ? '1px solid black' : ''}
                                opacity={pathname === '/card' ? 1 : 0.5}
                            >
                                Карта
                            </Heading>
                        </Link>
                    </HStack>
                    <Button maxW={'100px'} onClick={onLogout}>Выход</Button>
                </HStack>
                <Stack maxH={'100%'} overflow={'auto'} pr={'5px'} h={'100%'}>
                    <Outlet />
                </Stack>
            </Stack>
        </Stack>
    )
}