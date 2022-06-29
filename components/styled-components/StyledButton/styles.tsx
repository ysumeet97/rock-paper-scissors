import styled from 'styled-components';
import { withTheme } from '@mui/styles';
import { Button, Typography, Box } from '@mui/material';

const OutlinedButton = withTheme(styled(Button)<{
    height?: string;
    width?: string;
}>`
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    && {
        background: ${(props) => props.theme.palette.background.default};
        color: ${(props) => props.theme.palette.text.primary};
        border: 2px solid #ffffff;
        box-shadow: none;
        &:hover {
            background: ${(props) => props.theme.palette.background.paper};
            color: ${(props) => props.theme.palette.text.secondary};
            box-shadow: none;
        }
    }
`);

const ButtonContent = withTheme(styled(Box)`
    display: flex;
    width: 100%;
    justify-content: 'space-between';
`);

const ButtonText = withTheme(styled(Typography)`
    && {
        flex-grow: 1;
        white-space: nowrap;
    }
`);

export { OutlinedButton, ButtonContent, ButtonText };
