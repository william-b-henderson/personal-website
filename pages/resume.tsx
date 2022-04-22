import { Box, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import { Box, Text } from '@chakra-ui/react'

import { PageLayout } from '../components/PageLayout';

const ResumePage: NextPage = () => {
  return (
    <Flex justify="center">
      <PageLayout currentPage="resume">
        <Box
          position="relative"
          overflow="hidden"
          width="100%"
          height="100vh"
          backgroundImage="url('/loading.gif')"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
        >
          <iframe
            src="https://drive.google.com/file/d/1N-RfLG8yuxpo4PPcykVZXisYou9ZUEpW/preview"
            width="100%"
            height="100%"
            css={{ position: 'absolute', top: 0, left: 0 }}
            allow="autoplay"
          ></iframe>
        </Box>
      </PageLayout>
    </Flex>
  );
};

export default ResumePage;
