import styled from 'styled-components';
import { withTheme } from '@mui/styles';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Box,
    Typography,
} from '@mui/material';

const StyledDialog = withTheme(styled(Dialog)`
    && {
        & > .MuiDialog-container > .MuiPaper-root {
            background: ${(props) => props.theme.palette.background.paper};
            color: ${(props) => props.theme.palette.text.secondary};
            box-shadow: 0px 8px 10px rgba(47, 69, 92, 0.2);
            border-radius: 30px;
            padding: 30px 20px 0px 20px;
        }
    }
`);

const StyledDialogTitle = withTheme(styled(DialogTitle)`
    text-align: right;
    && {
        font-weight: 600;
        font-size: 1.625rem;
        padding-top: 0px;
    }
`);

const StyledDialogContent = withTheme(styled(DialogContent)`
    text-align: center;
`);

const Content = withTheme(styled(Typography)`
    && {
        font-weight: 600;
        font-size: 1.625rem;
        margin-bottom: 50px;
    }
`);

const ButtonBox = withTheme(styled(Box)`
    display: flex;
    justify-content: space-around;
`);

const IconBox = withTheme(styled(Box)`
    color: ${(props) => props.theme.palette.text.secondary};
    display: flex;
`);

const CongratulationsBox = withTheme(styled(Box)`
    color: ${(props) => props.theme.palette.text.secondary};
`);

const NextBox = withTheme(styled(Box)`
    color: ${(props) => props.theme.palette.text.secondary};
    display: flex;
    justify-content: center;
`);

export {
    StyledDialog,
    StyledDialogTitle,
    StyledDialogContent,
    Content,
    ButtonBox,
    IconBox,
    CongratulationsBox,
    NextBox,
};
