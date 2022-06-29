import { Icons } from 'assets';
import Image from 'next/image';
import React from 'react';
import PlayerChoiceBoxProps from 'types/components/PlayerChoiceBoxProps';
import { Labels } from 'utility/constants';
import { MainBox, NotSelectedBox, SelectedBox, Label } from './styles';

const PlayerChoiceBox = (props: PlayerChoiceBoxProps) => {
    const { playerSelection, handleSelect } = props;

    const getImageSource = (playerSelection: string) => {
        switch (playerSelection) {
            case 'rock':
                return Icons.RockIcon;
            case 'paper':
                return Icons.PaperIcon;
            case 'scissors':
                return Icons.ScissorsIcon;
            default:
                return;
        }
    };

    return (
        <MainBox>
            <Label>{Labels.CHOOSE}</Label>
            {playerSelection === 'all' ? (
                <NotSelectedBox>
                    <Image
                        src={Icons.RockIcon}
                        alt="rockIcon"
                        width="150px"
                        height="150px"
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleSelect('rock')}
                    />
                    <Image
                        src={Icons.PaperIcon}
                        alt="paperIcon"
                        width="150px"
                        height="150px"
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleSelect('paper')}
                    />
                    <Image
                        src={Icons.ScissorsIcon}
                        alt="scissorsIcon"
                        width="150px"
                        height="150px"
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleSelect('scissors')}
                    />
                </NotSelectedBox>
            ) : (
                <SelectedBox>
                    <Image
                        src={getImageSource(playerSelection)}
                        alt="selectedChoice"
                        width="420px"
                        height="420px"
                    />
                </SelectedBox>
            )}
        </MainBox>
    );
};

export default PlayerChoiceBox;
