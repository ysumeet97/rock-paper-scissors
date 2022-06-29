import { useRouter } from 'next/router';
import useStore from 'store/useStore';
import PageLayout from 'components/layouts/PageLayout';
import { Labels, Messages } from 'utility/constants';
import { MainBox, InputBox, Error } from 'styles/homeStyles';
import StyledButton from 'components/styled-components/StyledButton';
import StyledInput from 'components/styled-components/StyledInput';
import { useEffect, useState } from 'react';

const Home = () => {
    const router = useRouter();
    const store = useStore();

    const [errorActive, setErrorActive] = useState(false);
    const [inputTouched, setInputTouched] = useState(false);

    const handlePlayGame = () => {
        if (store.playerName !== '') {
            router.push('/game');
        } else {
            setErrorActive(true);
            setInputTouched(true);
        }
    };

    // store.setStartCounter(0);
    useEffect(() => {
        if (store.playerName === '') {
            setErrorActive(true);
        } else {
            setErrorActive(false);
        }
    }, [store.playerName]);

    const handleNameInput = (value: string) => {
        setInputTouched(true);
        store.setPlayerName(value);
    };

    return (
        <PageLayout>
            <MainBox>
                <InputBox>
                    <StyledInput
                        id="nameInput"
                        name="nameInput"
                        value={store.playerName}
                        placeholder={Labels.ENTER_YOUR_NAME}
                        height="27px"
                        width="50%"
                        handleChange={(event) =>
                            handleNameInput(event.target.value)
                        }
                    />
                    {errorActive && inputTouched ? (
                        <Error>{Messages.PLEASE_ENTER_NAME}</Error>
                    ) : (
                        <></>
                    )}
                </InputBox>
                <StyledButton
                    text={Labels.PLAY_GAME}
                    width="25vw"
                    height="60px"
                    handleClick={handlePlayGame}
                />
            </MainBox>
        </PageLayout>
    );
};

export default Home;
