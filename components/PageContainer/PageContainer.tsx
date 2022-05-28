import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import { ReactNode } from 'react';
import { NavBar } from '../Navigation/NavBar';

type PageLayoutProps = {
  children?: ReactNode;
};

export const PageContainer = ({ children }: PageLayoutProps) => {
  return (
    <>
      <Flex direction="column" justify="center" align="center" w="100%" bg="secondary.dorian">
        {children}
      </Flex>
    </>
  );
};
