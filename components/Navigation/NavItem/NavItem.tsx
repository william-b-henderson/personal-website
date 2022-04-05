import { Button, Text } from '@chakra-ui/react'
import Link from 'next/link'

type NavItemProps = {
  label?: string,
  link?: string,
  active?: boolean
}

export const NavItem = ({label, link, active}: NavItemProps) => {
  const navItemDecoration = active ? 'underline' : 'none'
  return (
    <Link href={`${link || ""}`} passHref>
          <Button 
            // border="1px solid black" 
            mx="1em"
            padding=".5em"
            backgroundColor="transparent"
            textDecoration={navItemDecoration}
            _hover={{
              color: "primary.lightBlue.300",
              textDecoration: "underline",
            }}
            _active={{
              textColor: "primary.lightBlue.300",
              textDecoration: "underline",
            }}
            _focus={{
              color: "primary.lightBlue.300",
              textDecoration: "underline",
              borderColor: "#719ECE",
              boxShadow: "0 0 10px #719ECE"
            }}
          >
            <Text textStyle={"h4"}>
              {label}
            </Text>
          </Button>
    </Link>
    
  )
}

