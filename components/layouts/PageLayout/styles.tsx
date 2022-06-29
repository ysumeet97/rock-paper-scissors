import styled from 'styled-components';
import { withTheme } from '@mui/styles';
import { Typography } from '@mui/material';

const StyledLayout = withTheme(styled.div`
    display: flex;
    flex-direction: column;
    background: ${(props) => props.theme.palette.background.default};
    padding: 30px;
    height: 100%;
`);

const StyledBody = withTheme(styled.div<{
    backgroundColor?: string;
}>`
    background: ${(props) => props.theme.palette.background.default};
    border: 2px solid #ffffff;
    padding: 30px;
    height: 100%;
    text-align: center;
`);

const Title = withTheme(styled(Typography)`
    && {
        font-size: 4.5rem;
        margin-bottom: 30px;
    }
`);

export { StyledLayout, StyledBody, Title };
