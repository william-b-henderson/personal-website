import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
// import { GreenButton } from '../Buttons';
import ProjectCardTitleBar from './ProjectCardTitleBar';

interface ProjectCardProps {
  title: string;
  oneLiner: string;
  imageAddress: string;
  link: string;
  language: string;
  year: string;
}

export const ProjectCardOneLiner = ({ title, oneLiner, imageAddress, link, language, year }: ProjectCardProps) => {
  return (
    <Link href={link} passHref>
      <Flex
        direction="column"
        justify="flex-start"
        width="30%"
        maxWidth="30rem"
        height="20rem"
        bg="secondary.dorian"
        m="10px"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
        borderRadius="md"
        overflow={'hidden'}
        _hover={{
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 30px',
          cursor: 'pointer',
        }}
      >
        <ProjectCardTitleBar title={title} language={language} year={year} />
        <Image src={imageAddress} alt={title} layout="responsive" width="3000px" height="1500px" />
        <Box w="100%" h="3.5em" overflow="scroll">
          <Text textAlign="center" textStyle="sec3">
            {oneLiner}
          </Text>
        </Box>

        {/* <GreenButton link={link} linkText="View Project" /> */}
      </Flex>
    </Link>
  );
};
