import { Box, Flex, Text } from '@chakra-ui/react';
interface ProjectCardProps {
  title: string;
  language: string;
  year: string;
}

const ProjectCardTitleBar = ({ title, language, year }: ProjectCardProps) => {
  const languageColorMap = new Map([
    ['ts', '#2b7489'],
    ['js', '#f1e05a'],
    ['python', '#3572A7'],
    ['c', '#665c54'],
    ['java', '#026075'],
    ['go', '#00ADD8'],
    ['react', '#61dafb'],
    ['nextjs', '#1a365d'],
  ]);
  const languageTextColorMap = new Map([
    ['ts', 'secondary.dorian'],
    ['js', '#000'],
    ['python', 'secondary.dorian'],
    ['c', 'secondary.dorian'],
    ['java', 'secondary.dorian'],
    ['go', '#000'],
    ['react', '#000'],
    ['nextjs', 'secondary.dorian'],
  ]);
  return (
    <Flex justify="space-between" w="100%">
      <Box w="10%" h="1.5rem" minWidth="3.5rem">
        <Text align="center" textStyle="sub3" fontStyle="italic" textColor="primary.lightGray.300">
          {year}
        </Text>
      </Box>
      <Text textAlign="center" textStyle="h5">
        {title}
      </Text>
      <Box bg={languageColorMap.get(language.toLowerCase())} w="10%" h="1.5rem" minWidth="3.5rem" borderRadius="md">
        <Text align="center" textStyle="sub3" textColor={languageTextColorMap.get(language.toLowerCase())}>
          {language}
        </Text>
      </Box>
    </Flex>
  );
};

export default ProjectCardTitleBar;
