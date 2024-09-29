import { CSSProperties, ReactNode } from 'react';
import {Heading, Stack} from "@chakra-ui/react";

export interface ILabelWrapperProps {
    children: ReactNode;
    label: string;
    required?: boolean;
    color?: 'gray'
    className?: string;
    fontSize?: string
    containerStyle?: CSSProperties;
}

const LabelWrapper = ({
                          children,
                          label,
                          required,
                          color,
                          className,
                          fontSize,
                          containerStyle
                      }: ILabelWrapperProps) => {
    return (
        <Stack gap={'4px'} width={'100%'} height={'100%'} style={containerStyle}>
            <Heading as={'h6'} size={'xs'} fontSize={fontSize} fontWeight={'400'} color={color === 'gray' ? '#ACACAC' : ''} className={className}>
                {label}
                {required && <span style={{color: 'red'}}>*</span>}
            </Heading>
            {children}
        </Stack>
    );
};

export default LabelWrapper;