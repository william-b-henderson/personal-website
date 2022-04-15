import { Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { ProjectCardList } from '../ProjectCardList';
import { BlueButton } from '../Buttons';

import projects from '../../components/Projects/projects.json';
import { ProjectCardOneLiner } from '../ProjectCard';

export const RecentProjectsSection: FC = () => {
  const projectsList = projects.projectList.slice(0, 3);
  return (
    <Flex width="100%" direction="column" alignItems="center" bg="secondary.dorian" boxShadow="inner">
      <Text textStyle="h3" mt="1rem">
        Recent Projects
      </Text>
      <ProjectCardList>
        {projectsList.map((project, index) => (
          <ProjectCardOneLiner
            key={index}
            title={project.title}
            language={project.language}
            oneLiner={project.oneLiner}
            year={project.year}
            imageAddress={project.imageAddress}
            link={project.link}
          />
        ))}
      </ProjectCardList>
      <BlueButton link="/projects" linkText="View All Projects" variant="h3" />
    </Flex>
  );
};
