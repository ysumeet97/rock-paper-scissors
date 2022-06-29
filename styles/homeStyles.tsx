import styled from 'styled-components';
import { withTheme } from '@mui/styles';
import { Box, Typography } from '@mui/material';

const MainBox = withTheme(styled(Box)`
    position: relative;
    height: 35vh;
    top: 25%;
`);

const InputBox = withTheme(styled(Box)`
    width: 100%;
    margin-bottom: 50px;
    margin-top: 22%;
`);

const Error = withTheme(styled(Typography)`
    && {
        font-size: 1rem;
        margin-top: 15px;
    }
`);

export { MainBox, InputBox, Error };
