import { useRouter } from 'next/router';
import useStore from 'store/useStore';
import PageLayout from 'components/layouts/PageLayout';
import WinnerModal from 'components/modals/WinnerModal';
import { APIConstants, GameConstants, Labels } from 'utility/constants';
import {
    GameBox,
    PlayBox,
    PlayerBox,
    PlayAgainBox,
    BotBox,
    ButtonBox,
} from 'styles/gameStyles';
import StyledButton from 'components/styled-components/StyledButton';
import ScoreBox from 'components/styled-components/ScoreBox';
import PlayerChoiceBox from 'components/styled-components/PlayerChoiceBox';
import BotChoiceBox from 'components/styled-components/BotChoiceBox';
import ResponseType from 'types/others/ResponseType';
import axios from 'axios';
import { useState } from 'react';

const Game = () => {
    const router = useRouter();
    const store = useStore();

    const [modalOpen, setModalOpen] = useState(false);

    const handleModalClose = () => {
        router.push('/');
        setModalOpen(false);
    };

    const getWinner = (playerScore: number, computerScore: number) => {
        console.log(playerScore);
        console.log(computerScore);
        if (playerScore > computerScore) {
            return 'player';
        } else if (playerScore < computerScore) {
            return 'computer';
        } else {
            return 'draw';
        }
    };

    const updateScores = (result: string) => {
        let currentGame = store.currentGame + 1;
        if (result === GameConstants.DRAW) {
            store.setCurrentGame(currentGame);
        } else if (result === GameConstants.YOU_LOSE) {
            store.setCurrentGame(currentGame);
            store.setComputerScore(store.computerScore + 1);
        } else {
            store.setCurrentGame(currentGame);
            store.setPlayerScore(store.playerScore + 1);
        }

        if (currentGame >= store.totalGames) {
            store.resetData();
            let winner: string = getWinner(
                store.playerScore,
                store.computerScore
            );
            store.setWinner(winner);
            setModalOpen(true);
        }
    };

    const handleSelect = async (value: string) => {
        store.setPlayerSelection(value);
        let randomPlayResponse: any = await axios.get('/api/getRandomPlay');
        if (randomPlayResponse.data.status === APIConstants.SUCCESS) {
            store.setBotSelection(randomPlayResponse.data.data);
            let response: any = await axios.post('/api/getGameResult', {
                player: value,
                computer: randomPlayResponse.data.data,
            });
            if (response.data.status === APIConstants.SUCCESS) {
                store.setPlayAgainVisible(true);
                updateScores(response.data.data);
                // handle result
            } else {
                // game result api failed
            }
        } else {
            // random play API failed
        }
    };

    const handlePlayAgain = () => {
        store.setBotSelection('');
        store.setPlayerSelection('all');
        store.setPlayAgainVisible(false);
    };

    return (
        <PageLayout>
            <GameBox>
                <ScoreBox
                    playerName={store.playerName}
                    playerScore={store.playerScore}
                    currentGame={store.currentGame}
                    computerScore={store.computerScore}
                />
                <PlayBox>
                    <PlayerBox>
                        <PlayerChoiceBox
                            playerSelection={store.playerSelection}
                            handleSelect={handleSelect}
                        />
                    </PlayerBox>
                    <PlayAgainBox>
                        <ButtonBox>
                            {store.playAgainVisible ? (
                                <StyledButton
                                    text={Labels.PLAY_AGAIN}
                                    width="10vw"
                                    height="60px"
                                    handleClick={handlePlayAgain}
                                />
                            ) : (
                                <></>
                            )}
                        </ButtonBox>
                    </PlayAgainBox>
                    <BotBox>
                        <BotChoiceBox botSelection={store.botSelection} />
                    </BotBox>
                </PlayBox>
            </GameBox>
            {modalOpen ? (
                <WinnerModal open={modalOpen} handleClose={handleModalClose} />
            ) : (
                <></>
            )}
        </PageLayout>
    );
};

export default Game;
