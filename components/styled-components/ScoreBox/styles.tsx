import styled from 'styled-components';
import { withTheme } from '@mui/styles';
import { Box, Typography } from '@mui/material';

const MainBox = withTheme(styled(Box)`
    border: 2px solid #ffffff;
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;
    margin-bottom: 15px;
`);

const PlayerScoreBox = withTheme(styled(Box)`
    width: 45%;
`);

const CurrentGameBox = withTheme(styled(Box)`
    width: 10%;
    background: ${(props) => props.theme.palette.background.paper};
    color: ${(props) => props.theme.palette.text.secondary};
`);

const BotScoreBox = withTheme(styled(Box)`
    width: 45%;
`);

const Name = withTheme(styled(Typography)`
    && {
        font-size: 1.75rem;
    }
`);

const Score = withTheme(styled(Typography)`
    && {
        font-size: 3rem;
    }
`);

const CurrentGame = withTheme(styled(Box)`
    font-size: 5rem;
`);

export {
    MainBox,
    PlayerScoreBox,
    CurrentGameBox,
    BotScoreBox,
    Name,
    Score,
    CurrentGame,
};
