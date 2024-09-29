import {Button, Input, Stack} from "@chakra-ui/react";
import LabelWrapper from "../../shared/ui/labelWrapper.tsx";
import {useFormik} from "formik";
import {useGetCard} from "../../entities/card/useGetCard.tsx";
import {ICard} from "../../shared/services/card/card.service.ts";
import {useUpdateCard} from "../../entities/card/useUpdateCard.tsx";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {getAccessToken} from "../../shared/services/api.ts";

export const CardPage = () => {
    const response = useGetCard()

    const updateCard = useUpdateCard()

    const navigate = useNavigate();

    const {values, setFieldValue, handleSubmit} = useFormik<ICard>({
        enableReinitialize: true,
        initialValues: response?.data ?? {
            name: '',
            bank: '',
            number: '',
            type: '',
        },
        onSubmit: (data) => {
            updateCard.mutateAsync({...data, type: undefined})
        }
    })

    useEffect(() => {
        if (!getAccessToken()) navigate('/auth')
    }, []);

    return (
        <Stack justifyContent={'flex-start'} alignItems={'flex-start'}>
            <form style={{width: '100%', height: '100%'}} onSubmit={handleSubmit}>
                <Stack>
                    <LabelWrapper label={'Номер карты'}>
                        <Input value={values.number} onChange={(event => setFieldValue('number', event.target.value))}/>
                    </LabelWrapper>
                    <LabelWrapper label={'Название банка'}>
                        <Input value={values.bank} onChange={(event => setFieldValue('bank', event.target.value))}/>
                    </LabelWrapper>
                    <LabelWrapper label={'Название'}>
                        <Input value={values.name} onChange={(event => setFieldValue('name', event.target.value))}/>
                    </LabelWrapper>
                    <Button bg={'#38ac2a'} type={'submit'}>Сохранить изменения</Button>
                </Stack>
            </form>
        </Stack>
    )
}