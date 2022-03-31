import { Flex } from '@chakra-ui/react'
import { FC } from 'react'

export const NavMenu: FC = ({ children }) => {
  return (
    <Flex justifyContent="flex-end" width="100vw" border="1px solid black" m="0.5em" p="0.5em" alignItems="center">
      {children}
    </Flex>
  )
}
