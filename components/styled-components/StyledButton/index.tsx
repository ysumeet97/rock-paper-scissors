import React from 'react';
import StyledButtonProps from 'types/components/StyledButtonProps';
import { OutlinedButton, ButtonContent, ButtonText } from './styles';

const StyledButton = (props: StyledButtonProps) => {
    const { text, height, width, handleClick } = props;

    return (
        <OutlinedButton
            variant="contained"
            size="large"
            height={height}
            width={width}
            onClick={handleClick}>
            <ButtonContent>
                <ButtonText variant="button">{text}</ButtonText>
            </ButtonContent>
        </OutlinedButton>
    );
};

export default StyledButton;
