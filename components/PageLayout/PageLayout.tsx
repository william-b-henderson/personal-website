import { Flex } from '@chakra-ui/react'
import { FC } from 'react'
import { NavBar } from '../NavBar'


export const PageLayout: FC = ({ children }) => {
    return (
            <Flex direction="column" justify="center" align="center"  bg="blue" w="50vw">
                <NavBar/>
                {children}
            </Flex>
  )
}

