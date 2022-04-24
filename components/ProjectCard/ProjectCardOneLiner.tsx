import { Flex, Text } from '@chakra-ui/react';
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
        width={{ base: '95%', md: '30%' }}
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
        <Flex w="100%" px="1rem">
          <Text textAlign="center" textStyle="sec3" mt="10px">
            {oneLiner}
          </Text>
        </Flex>

        {/* <GreenButton link={link} linkText="View Project" /> */}
      </Flex>
    </Link>
  );
};
