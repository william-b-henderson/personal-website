import { Flex } from '@chakra-ui/react';
import { FC } from 'react';

export const ProjectCardList: FC = ({ children }) => {
  return (
    <Flex width="100%" flexWrap="wrap" justify="center">
      {children}
    </Flex>
  );
};
