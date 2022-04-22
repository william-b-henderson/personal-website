import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import { ReactNode } from 'react';
import { NavBar } from '../Navigation/NavBar';

type PageLayoutProps = {
  currentPage?: string;
  children?: ReactNode;
};

export const PageLayout = ({ currentPage, children }: PageLayoutProps) => {
  return (
    <>
      <Head>
        <title>William Henderson's Personal Website - {currentPage}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="William Henderson's personal website and portfolio." />
      </Head>
      <Flex direction="column" justify="center" align="center" w="100%" bg="primary.lightGray.100">
        <NavBar currentPage={currentPage} />
        {children}
      </Flex>
    </>
  );
};
