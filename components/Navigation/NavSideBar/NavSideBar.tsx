import { IconNavItem, NavItem } from '../NavItem';
import { BsGithub } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

type NavBarProps = {
  currentPage?: string;
};

export const NavSideBar = ({ currentPage }: NavBarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        aria-label="open menu"
        onClick={onOpen}
        mx="1rem"
        py="1.5rem"
        px=".5rem"
        backgroundColor="transparent"
        color="secondary.dorian"
        icon={<FiMenu size={36} />}
        _hover={{
          _before: {
            width: '100%',
          },
        }}
        _active={{
          color: 'primary.lightGray.200',
          _before: {
            backgroundColor: 'primary.lightGray.200',
          },
        }}
        _focus={{
          _before: {
            width: '100%',
          },
        }}
        _before={{
          transition: '300ms',
          height: '5px',
          content: '""',
          position: 'absolute',
          backgroundColor: 'secondary.dorian',
          width: '0%',
          bottom: '0px',
        }}
      />
      <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bgColor="primary.lake.100">
          <DrawerCloseButton color="secondary.dorian" />
          {/* <DrawerHeader color="secondary.dorian">Navigation</DrawerHeader> */}

          <DrawerBody>
            <VStack>
              <NavItem link="projects" active={currentPage === 'projects'} label="Projects" textStyle="h4" />
              <NavItem link="resume" active={currentPage === 'resume'} label="Resume" textStyle="h4" />
              <NavItem link="contact" active={currentPage === 'contact'} label="Contact" textStyle="h4" />
              <IconNavItem label="Github" link="https://github.com/william-b-henderson" icon={<BsGithub size={36} />} />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
