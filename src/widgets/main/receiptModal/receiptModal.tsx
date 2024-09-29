import {Image, Modal, ModalContent, ModalOverlay} from "@chakra-ui/react";
import {API_URL} from "../../../shared/constants/api.ts";
import {IPaymentResponse} from "../../../shared/services/payment/payment.service.ts";

interface IReceiptModalProps {
    isOpen: boolean;
    onClose: () => void;
    payment: IPaymentResponse
}

export const ReceiptModal = ({isOpen, onClose, payment}: IReceiptModalProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay backdropFilter={'blur(2px)'}/>
            <ModalContent bg={'rgba(0,0,0,0)'} boxShadow={'none'}>
                <Image src={`${API_URL}/${payment.receipt_url}`}/>
            </ModalContent>
        </Modal>
    )
}