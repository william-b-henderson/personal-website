import { Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { PageLayout } from '../../components/PageLayout';
import { ProjectCard } from '../../components/ProjectCard';
import { ProjectCardList } from '../../components/ProjectCardList';

import projects from '../../components/Projects/projects.json';

const ProjectsPage: NextPage = () => {
  const projectsList = projects.projectList;

  return (
    <Flex justify="center">
      <PageLayout currentPage="projects">
        <ProjectCardList>
          {projectsList.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              language={project.language}
              description={project.description}
              year={project.year}
              imageAddress={project.imageAddress}
              link={project.link}
            />
          ))}
        </ProjectCardList>
      </PageLayout>
    </Flex>
  );
};

export default ProjectsPage;
