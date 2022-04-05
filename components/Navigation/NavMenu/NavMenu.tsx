import { Flex } from '@chakra-ui/react'
import { FC } from 'react'

export const NavMenu: FC = ({ children }) => {
  return (
    <Flex justifyContent="flex-end" width="100vw" alignItems="center" paddingBottom="0.5em">
      {children}
    </Flex>
  )
}
