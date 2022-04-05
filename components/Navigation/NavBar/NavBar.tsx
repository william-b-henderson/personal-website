import { Box, Button, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { NavItem } from '../NavItem'
import { NavMenu } from '../NavMenu'

type NavBarProps = {
  currentPage?: string,
}

export const NavBar = ({currentPage}: NavBarProps) => {

  return (
    <Flex 
      justifyContent="space-between" 
      width="100%" 
      align="flex-end" 
      boxShadow="0 4px 2px -2px"
      bg="primary.sand.100"
    >
      <Box p="0.5em">
        <Link href="/" passHref>
            <Button 
              mx="1em"
              padding=".5em"
              backgroundColor="transparent"
              _hover={{
                textColor: "primary.lightBlue.300",
                textDecoration: "underline",
              }}
              _active={{
                textColor: "primary.lightBlue.300",
                textDecoration: "underline",
              }}
              _focus={{
                textColor: "primary.lightBlue.300",
                textDecoration: "underline",
                borderColor: "#719ECE",
                boxShadow: "0 0 10px #719ECE"
              }}
            >
              <Text 
                textStyle="h2" 
                whiteSpace={"nowrap"} 
              >
                Will Henderson
              </Text>
            </Button>
        </Link>
      </Box>
      <NavMenu>
        <NavItem link='projects' active={currentPage === 'projects'} label='Projects'/>
        <NavItem link='resume' active={currentPage === 'resume'} label='Resume'/>
        <NavItem link='contact' active={currentPage === 'contact'} label='Contact'/>
      </NavMenu>
    </Flex>
  )


}

