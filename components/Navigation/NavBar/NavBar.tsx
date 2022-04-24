import { Box, Flex } from '@chakra-ui/react';
// import Link from 'next/link';
import { IconNavItem, NavItem } from '../NavItem';
import { NavMenu } from '../NavMenu';
import { BsGithub } from 'react-icons/bs';
import { NavSideBar } from '../NavSideBar';

type NavBarProps = {
  currentPage?: string;
};

export const NavBar = ({ currentPage }: NavBarProps) => {
  return (
    <Flex justifyContent="space-between" width="100%" align="flex-end" boxShadow="0 4px 2px -2px" bg="primary.lake.100">
      <Box px="0.5em">
        <NavItem link="/" active={currentPage === ''} label="Will Henderson" textStyle="h2" />
      </Box>
      <NavMenu>
        <NavItem link="projects" active={currentPage === 'projects'} label="Projects" textStyle="h4" />
        <NavItem link="resume" active={currentPage === 'resume'} label="Resume" textStyle="h4" />
        <NavItem link="contact" active={currentPage === 'contact'} label="Contact" textStyle="h4" />
        <IconNavItem label="Github" link="https://github.com/william-b-henderson" icon={<BsGithub size={36} />} />
      </NavMenu>
      <NavSideBar />
    </Flex>
  );
};
