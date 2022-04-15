import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { GreenButton } from '../Buttons';
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
    <Flex
      direction="column"
      justify="space-between"
      width="30%"
      maxWidth="30rem"
      height="20rem"
      bg="secondary.dorian"
      m="10px"
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
      borderRadius="md"
      overflow={'hidden'}
    >
      <ProjectCardTitleBar title={title} language={language} year={year} />
      <Image src={imageAddress} alt={title} layout="responsive" width="3000px" height="1500px" />
      <Box w="100%" h="3.5em" overflow="scroll">
        <Text textAlign="center" textStyle="sec3">
          {oneLiner}
        </Text>
      </Box>

      <GreenButton link={link} linkText="View Project" />
    </Flex>
  );
};
