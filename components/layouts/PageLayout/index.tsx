import React from 'react';
import PageLayoutProps from 'types/layouts/PageLayoutProps';
import { StyledBody, StyledLayout, Title } from './styles';
import Head from 'next/head';
import { Labels } from 'utility/constants';

const PageLayout = (props: PageLayoutProps) => {
    return (
        <StyledLayout>
            <Head>
                <title>{Labels.ROCK_PAPER_SCISSORS}</title>
                <meta
                    property="og:title"
                    content={Labels.ROCK_PAPER_SCISSORS}
                    key="title"
                />
            </Head>

            <StyledBody>
                <Title>{Labels.ROCK_PAPER_SCISSORS}</Title>
                {props.children}
            </StyledBody>
        </StyledLayout>
    );
};

export default PageLayout;
