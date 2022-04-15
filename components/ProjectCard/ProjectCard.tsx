import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { GreenButton } from '../Buttons';
import ProjectCardTitleBar from './ProjectCardTitleBar';

interface ProjectCardProps {
  title: string;
  description: string;
  imageAddress: string;
  link: string;
  language: string;
  year: string;
}

export const ProjectCard = ({ title, description, imageAddress, link, language, year }: ProjectCardProps) => {
  return (
    <Flex
      direction="column"
      justify="space-between"
      width="45%"
      maxWidth="30rem"
      height="30em"
      bg="secondary.dorian"
      m="10px"
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
      borderRadius="md"
      position="relative"
    >
      <ProjectCardTitleBar title={title} language={language} year={year} />
      <Image src={imageAddress} alt={title} layout="responsive" width="3000px" height="1500px" />
      <Box w="100%" h="10em" overflow="scroll" px="1rem">
        <Text textAlign="center" textStyle="sec3" mt="10px">
          {description}
        </Text>
      </Box>

      <GreenButton link={link} linkText="View Project" />
    </Flex>
  );
};
