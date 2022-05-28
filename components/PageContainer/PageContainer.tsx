import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

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
