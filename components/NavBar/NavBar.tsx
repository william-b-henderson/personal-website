import { Box, Flex } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { NavItem } from '../NavItem'
import { NavMenu } from '../NavMenu'

export const NavBar: FunctionComponent = () => {
  return (
    <Flex justifyContent="space-between" width="100%">
      <Box border="1px solid black" m="0.5em" p="0.5em" alignItems="center">WILLIAM HENDERSON</Box>
      <NavMenu>
        <NavItem />
        <NavItem />
        <NavItem />
      </NavMenu>
    </Flex>
  )
}

