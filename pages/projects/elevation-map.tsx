import { Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { PageLayout } from '../../components/PageLayout';

const ElevationMap: NextPage = () => {
  return (
    <Flex justify="center">
      <PageLayout currentPage="projects">Elevation Map</PageLayout>
    </Flex>
  );
};

export default ElevationMap;
