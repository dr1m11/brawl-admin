import {Button, Heading, Input, Stack} from "@chakra-ui/react";
import {AuthLayout} from "./layout/authLayout.tsx";
import LabelWrapper from "../../shared/ui/labelWrapper.tsx";
import {useFormik} from "formik";
import {useLogin} from "../../entities/auth/useLogin.tsx";

export const Auth = () => {
    const login = useLogin()

    const {setFieldValue, values, handleSubmit} = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: (values) => {
            login.mutateAsync(values)
        }
    })

    return (
        <AuthLayout>
            <Stack gap={3} justifyContent={'center'} w={'100%'}>
                <Heading as={'h1'} size={'lg'} textAlign={'center'}>Войти</Heading>
                <form
                    style={{width: '100%', gap: '32px', display: 'flex', flexDirection: 'column'}}
                    onSubmit={handleSubmit}
                >
                    <Stack gap={4}>
                        <LabelWrapper label={'Логин'} required>
                            <Input
                                placeholder={'Введите логин'}
                                value={values.username}
                                onChange={event => setFieldValue('username', event.target.value)}
                            />
                        </LabelWrapper>\
                        <LabelWrapper label={'Пароль'} required>
                            <Input
                                placeholder={'Введите пароль'}
                                value={values.password}
                                onChange={event => setFieldValue('password', event.target.value)}
                                type={'password'}
                            />
                        </LabelWrapper>
                    </Stack>
                    <Button type={'submit'} w={'100%'}>Войти</Button>
                </form>
            </Stack>
        </AuthLayout>
    )
}