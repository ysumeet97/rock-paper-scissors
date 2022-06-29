import { Icons } from 'assets';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import useStore from 'store/useStore';
import BotChoiceBoxProps from 'types/components/BotChoiceBoxProps';
import { MainBox, ImageBox, CounterBox } from './styles';

const BotChoiceBox = (props: BotChoiceBoxProps) => {
    const store = useStore();
    const { botSelection } = props;
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
            {store.botSelection !== '' ? (
                <ImageBox>
                    <Image
                        src={getImageSource(botSelection)}
                        alt="botSelection"
                        width="420px"
                        height="420px"
                    />
                </ImageBox>
            ) : store.playerSelection !== 'all' ? (
                <CounterBox>{'Choosing...'}</CounterBox>
            ) : (
                <></>
            )}
        </MainBox>
    );
};

export default BotChoiceBox;
