import { Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { NavItem } from '../Navigation/NavItem';
import { NavMenu } from '../Navigation/NavMenu';

export const PageSection: FC = () => {
  return (
    <Flex direction="column" width="100vw">
      <Box border="1px solid black" m="0.5em" p="0.5em" alignItems="center">
        WILLIAM HENDERSON
      </Box>
      <NavMenu>
        <NavItem />
        <NavItem />
        <NavItem />
      </NavMenu>
    </Flex>
  );
};
