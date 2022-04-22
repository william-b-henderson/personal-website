import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
// import { GreenButton } from '../Buttons';
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
    <Link href={link} passHref>
      <Flex
        direction="column"
        justify="flex-start"
        width="45%"
        maxWidth="30rem"
        height="30em"
        bg="secondary.dorian"
        m="10px"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
        borderRadius="md"
        position="relative"
        _hover={{
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 30px',
          cursor: 'pointer',
        }}
      >
        <ProjectCardTitleBar title={title} language={language} year={year} />
        <Image src={imageAddress} alt={title} layout="responsive" width="3000px" height="1500px" />
        <Flex w="100%" px="1rem">
          <Text textAlign="center" textStyle="sec3" mt="10px">
            {description}
          </Text>
        </Flex>
      </Flex>
    </Link>
  );
};
