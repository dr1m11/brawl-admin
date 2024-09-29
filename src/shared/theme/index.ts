import { extendTheme } from '@chakra-ui/react';
import {inputTheme} from "./input/input.theme.ts";
import {buttonTheme} from "./button/button.theme.ts";

export const theme = extendTheme({
    styles: {
        global: {
            textarea: {
                overflow: 'hidden',
            },
        },
    },

    components: {
        Input: inputTheme,
        Button: buttonTheme,
    },
});
