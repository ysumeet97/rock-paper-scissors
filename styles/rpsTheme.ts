import { ThemeOptions } from '@mui/material/styles';

const rpsTheme: ThemeOptions = {
    palette: {
        mode: 'light',
        error: {
            main: '#FFFFFF',
        },
        background: {
            paper: '#FFFFFF',
            default: '#000000',
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#000000',
        },
    },
    typography: {
        fontFamily: 'Titan One',
        fontWeightRegular: 400,
    },
};

export default rpsTheme;
