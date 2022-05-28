import { Box, Flex } from '@chakra-ui/react';
// import Link from 'next/link';
import { IconNavItem, NavItem } from '../NavItem';
import { NavMenu } from '../NavMenu';
import { BsGithub } from 'react-icons/bs';
import { NavSideBar } from '../NavSideBar';
import { useEffect, useState } from 'react';
import { debounce } from '../../../utils/helpers';

type NavBarProps = {
  currentPage?: string;
};

export const NavBar = ({ currentPage }: NavBarProps) => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > lastScrollTop) {
      // downscroll
      setVisible(false);
    } else {
      // upscroll
      setVisible(true);
    }
    setLastScrollTop(scrollTop);
    console.log(scrollTop);
    console.log(lastScrollTop);
  }, 50);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <Flex
      justifyContent="space-between"
      width="100%"
      align="flex-end"
      boxShadow="0 4px 2px -2px"
      bg="primary.lake.100"
      className="navbar"
      zIndex={40}
      position="fixed"
      top={0}
      style={{
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'all 0.3s ease-in-out',
      }}
    >
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
