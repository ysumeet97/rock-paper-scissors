import React from 'react';
import WinnerModalProps from 'types/modals/WinnerModalProps';
import {
    StyledDialog,
    StyledDialogTitle,
    StyledDialogContent,
    Content,
    ButtonBox,
    IconBox,
    CongratulationsBox,
    NextBox,
} from './styles';
import { Labels, Messages } from 'utility/constants';
import StyledButton from 'components/styled-components/StyledButton';
import { IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import useStore from 'store/useStore';
import { Icons } from 'assets';
import Image from 'next/image';

const WinnerModal = (props: WinnerModalProps) => {
    const store = useStore();
    const { open, handleClose } = props;

    const handleModalClose = (event: object, reason: string) => {
        if (reason && reason == 'backdropClick') return;
        handleClose();
    };

    const handleRestart = () => {
        handleClose();
    };

    return (
        <StyledDialog
            fullWidth
            maxWidth="sm"
            open={open}
            onClose={handleModalClose}>
            <StyledDialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        '&:hover': {
                            background: 'none',
                        },
                    }}>
                    <IconBox>
                        <CloseIcon />
                        <Typography sx={{ fontWeight: 600 }}>
                            &nbsp;Close
                        </Typography>
                    </IconBox>
                </IconButton>
            </StyledDialogTitle>
            <StyledDialogContent>
                {store.winner === 'player' ? (
                    <CongratulationsBox>
                        <Image src={Icons.WinnerIcon} alt="winnerIcon" />
                        <Content>{Labels.CONGRATULATIONS}</Content>
                    </CongratulationsBox>
                ) : (
                    <NextBox>
                        <Content>{Labels.BETTER_LUCK_NEXT_TIME}</Content>
                    </NextBox>
                )}
                <ButtonBox>
                    <StyledButton
                        text={Labels.RESTART}
                        width="10vw"
                        height="60px"
                        handleClick={handleRestart}
                    />
                </ButtonBox>
            </StyledDialogContent>
        </StyledDialog>
    );
};

export default WinnerModal;
