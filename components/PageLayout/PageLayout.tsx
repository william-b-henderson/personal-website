import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { NavBar } from '../Navigation/NavBar';

type PageLayoutProps = {
  currentPage?: string;
  children?: ReactNode;
};

export const PageLayout = ({ currentPage, children }: PageLayoutProps) => {
  return (
    <Flex direction="column" justify="center" align="center" w="100%" bg="primary.lightGray.100">
      <NavBar currentPage={currentPage} />
      {children}
    </Flex>
  );
};
