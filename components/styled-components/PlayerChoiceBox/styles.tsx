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

const NotSelectedBox = withTheme(styled(Box)`
    display: flex;
    flex-direction: column;
`);

const SelectedBox = withTheme(styled(Box)``);

const Label = withTheme(styled(Typography)`
    && {
        font-size: 1.55rem;
        margin-bottom: 10px;
    }
`);

export { MainBox, NotSelectedBox, SelectedBox, Label };
