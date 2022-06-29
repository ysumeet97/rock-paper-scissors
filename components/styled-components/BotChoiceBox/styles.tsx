import styled from 'styled-components';
import { withTheme } from '@mui/styles';
import { Box, Typography } from '@mui/material';

const MainBox = withTheme(styled(Box)`
    border: 2px solid #ffffff;
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    height: 100%;
`);

const ImageBox = withTheme(styled(Box)`
    margin-top: 46px;
`);

const CounterBox = withTheme(styled(Box)`
    font-size: 3rem;
    position: relative;
    top: 40%;
`);

export { MainBox, ImageBox, CounterBox };
