import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import { Box, Text } from '@chakra-ui/react'

import { PageLayout } from '../components/PageLayout'

const Home: NextPage = () => {
  return (
    <Flex justify="center">
      <PageLayout>
        Hi
      </PageLayout>
    </Flex>
  )
}

export default Home
