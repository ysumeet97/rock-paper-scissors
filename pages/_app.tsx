import * as React from 'react';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider as StyledProvider } from 'styled-components';
import {
    ThemeProvider,
    CssBaseline,
    createTheme,
    StyledEngineProvider,
    responsiveFontSizes,
} from '@mui/material';
import createEmotionCache from 'utility/createEmotionCache';
import theme from 'styles/rpsTheme';
import AxiosHOC from 'components/hoc/AxiosHOC';

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const rpsTheme = responsiveFontSizes(createTheme(theme));

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
    const {
        Component,
        emotionCache = clientSideEmotionCache,
        pageProps,
    } = props;

    return (
        <CacheProvider value={emotionCache}>
            <AxiosHOC>
                <React.Fragment>
                    <StyledEngineProvider injectFirst>
                        <ThemeProvider theme={rpsTheme}>
                            <StyledProvider theme={rpsTheme}>
                                <CssBaseline />
                                <Component {...pageProps} />
                            </StyledProvider>
                        </ThemeProvider>
                    </StyledEngineProvider>
                </React.Fragment>
            </AxiosHOC>
        </CacheProvider>
    );
};

export default MyApp;
