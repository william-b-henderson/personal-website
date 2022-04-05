import { Flex, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import { Box, Text } from '@chakra-ui/react'

import { PageLayout } from '../../components/PageLayout'

const ProjectsPage: NextPage = () => {
    return (
        <Flex justify="center">
            <PageLayout currentPage='projects'>
                <Text textStyle="sub3">
                    Projects
                </Text>
            </PageLayout>
        </Flex>
  )
}

export default ProjectsPage
