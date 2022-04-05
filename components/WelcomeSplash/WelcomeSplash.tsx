import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { FC } from 'react'

export const WelcomeSplash: FC = () => {
  return (
    <Flex width="100%" mt="20px" border="solid black 1px" direction="column" alignItems="center">
        <Box 
          borderRadius='100px'
          border="solid 3px"
          borderColor={'primary.sand.200'}
          overflow='hidden' 
          w="200px" 
          h="300px" 
          position="relative"
          my="10px"
        >
          <Image src="/Profile-HeadShot-Head.png" alt="Will Henderson" layout='fill' objectFit="cover" />
        </Box>
        <Text color="black" textStyle="sub3" px="10px" textAlign={"center"}>
          Hello! I'm Will, a software engineer majoring in Computer Science at UC Berkeley. <br />
          <br />
          Currently, I'm working on a project called Elevation Map, a web application that helps users
          plan the best run with a minimal amount of elevation change. <br />
          <br />
          Check out some of my other projects below!
        </Text>
    </Flex>
  )
}

