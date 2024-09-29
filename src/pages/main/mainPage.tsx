import {Button, HStack, Stack, Text, useDisclosure} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useGetPaymentsList} from "../../entities/payment/useGetPaymentsList.tsx";
import LabelWrapper from "../../shared/ui/labelWrapper.tsx";
import {useChangeStatus} from "../../entities/payment/useChangeStatus.tsx";
import {ReceiptModal} from "../../widgets/main/receiptModal/receiptModal.tsx";
import {IPaymentResponse} from "../../shared/services/payment/payment.service.ts";
import {getAccessToken} from "../../shared/services/api.ts";

export const MainPage = () => {
    const {isOpen, onClose, onOpen} = useDisclosure()
    const navigate = useNavigate();

    const [selectedPayment, setSelectedPayment] = useState<IPaymentResponse>({
        receipt_url: '',
        user_id: '',
        amount: 0,
        status: ''
    });

    const response = useGetPaymentsList()

    const changeStatus = useChangeStatus()

    const onAccept = (id: string) => {
        changeStatus.mutateAsync({replenishment_id: id, status: 'Approved'})
    }

    const onReject = (id: string) => {
        changeStatus.mutateAsync({replenishment_id: id, status: 'Rejected'})
    }

    const onSelect = (payment: IPaymentResponse) => {
        setSelectedPayment(payment)
        onOpen()
    }

    useEffect(() => {
        if (!getAccessToken()) navigate('/auth')
    }, []);

    return (
        <Stack>
            {response &&
                response.map((item) => (
                    <HStack
                        key={item.receipt_url}
                        border={'1px solid #cdcdcd'}
                        borderRadius={8}
                        padding={'8px 12px'}
                        justifyContent={'space-between'}
                        _hover={{background: '#dddddd'}}
                        transition={'background 0.2s ease-in-out'}
                        alignItems={'flex-end'}
                    >
                        <HStack gap={8} alignItems={'flex-start'}>
                            <Stack w={'100px'}>
                                <LabelWrapper label={'Сумма'}>
                                    <Text lineHeight={'40px'} fontSize={'18px'}>{item.amount} RUB</Text>
                                </LabelWrapper>
                            </Stack>
                            <Stack w={'fit-content'}>
                                <LabelWrapper label={'Статус'}>
                                    <Text lineHeight={'40px'} fontSize={'18px'}>{item.status}</Text>
                                </LabelWrapper>
                            </Stack>
                            <Stack w={'fit-content'}>
                                <LabelWrapper label={'Чек'}>
                                    <Button onClick={() => onSelect(item)}>Показать</Button>
                                </LabelWrapper>
                            </Stack>
                        </HStack>
                        <HStack alignItems={'flex-end'}>
                            <Button bg={'#38ac2a'} onClick={() => onAccept(item.receipt_url)}>Принять</Button>
                            <Button bg={'#ac482a'} onClick={() => onReject(item.receipt_url)}>Отказ</Button>
                        </HStack>
                    </HStack>
                ))
            }
            <ReceiptModal isOpen={isOpen} onClose={onClose} payment={selectedPayment}/>
        </Stack>
    )
}