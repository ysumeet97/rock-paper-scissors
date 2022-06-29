import React from 'react';
import useStore from 'store/useStore';
import ScoreBoxProps from 'types/components/ScoreBoxProps';
import { Labels } from 'utility/constants';
import {
    MainBox,
    PlayerScoreBox,
    CurrentGameBox,
    BotScoreBox,
    Name,
    Score,
    CurrentGame,
} from './styles';

const ScoreBox = (props: ScoreBoxProps) => {
    const { playerName, playerScore, currentGame, computerScore } = props;

    return (
        <MainBox>
            <PlayerScoreBox>
                <Name>{playerName.toUpperCase()}</Name>
                <Score>{playerScore}</Score>
            </PlayerScoreBox>
            <CurrentGameBox>
                <CurrentGame>{currentGame}</CurrentGame>
            </CurrentGameBox>
            <BotScoreBox>
                <Name>{Labels.BOT}</Name>
                <Score>{computerScore}</Score>
            </BotScoreBox>
        </MainBox>
    );
};

export default ScoreBox;
