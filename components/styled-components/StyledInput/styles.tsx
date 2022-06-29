import styled from 'styled-components';
import { withTheme } from '@mui/styles';
import { TextField } from '@mui/material';

const OutlinedInput = withTheme(styled(TextField)<{
    height?: string;
    width?: string;
}>`
    width: ${(props) => props.width};
    && {
        fieldset {
            display: hidden;
        }
        & .Mui-focused fieldset {
            border: 2px solid #ffffff;
        }
        & .MuiOutlinedInput-notchedOutline {
            border: 2px solid #ffffff;
        }
        input::placeholder {
            font-size: 1rem;
            color: ${(props) => props.theme.palette.text.primary};
        }
        & .MuiOutlinedInput-input {
            height: ${(props) => props.height};
            padding-left: 30px;
            padding-right: 30px;
            text-align: center;
            background-color: ${(props) =>
                props.theme.palette.background.default};
        }
    }
`);

export { OutlinedInput };
