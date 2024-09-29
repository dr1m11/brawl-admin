import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const primary = defineStyle({
    backgroundColor: '#4780fb',
    color: '#fff',
    width: 'fit-content',
    padding: '10px',
    _hover: {
        opacity: 0.8,
    }
});

const icon = defineStyle({
    backgroundColor: 'inherit',
    color: '#fff',
    width: '100%',
    padding: '10px',
    _hover: {
        background: 'rgba(89,89,89,0.38)',
    }
});

export const buttonTheme = defineStyleConfig({
    variants: {
        primary,
        icon,
    },

    defaultProps: { variant: 'primary' },
});
