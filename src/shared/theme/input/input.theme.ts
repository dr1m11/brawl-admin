import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(inputAnatomy.keys);

const primary = definePartsStyle({
  field: {
    fontSize: '14px',
    fontWeight: '500',
    borderRadius: '5px',
    border: '1px solid rgba(0, 0, 0, 0.20)',
    background: '#fafafa',
    _placeholder: { color: '#ACACAC' },
    _focus: {
      outline: 'none',
    },
    _disabled: { opacity: 0.9 },
  },
});

export const inputTheme = defineMultiStyleConfig({
  variants: { primary },
  defaultProps: { variant: 'primary' },
});
