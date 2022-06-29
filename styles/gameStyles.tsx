import styled from 'styled-components';
import { withTheme } from '@mui/styles';
import { Box, Typography } from '@mui/material';

const GameBox = withTheme(styled(Box)`
    position: relative;
    top: 2%;
    height: 100%;
`);

const InputBox = withTheme(styled(Box)`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 50px;
`);

const PlayBox = withTheme(styled(Box)`
    display: flex;
    justify-content: space-between;
`);

const PlayerBox = withTheme(styled(Box)`
    width: 42.5%;
`);

const PlayAgainBox = withTheme(styled(Box)`
    width: 15%;
`);

const BotBox = withTheme(styled(Box)`
    width: 42.5%;
`);

const ButtonBox = withTheme(styled(Box)`
    position: relative;
    top: 40%;
`);

export {
    GameBox,
    InputBox,
    PlayBox,
    PlayerBox,
    PlayAgainBox,
    BotBox,
    ButtonBox,
};
