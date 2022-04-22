import { Button, Text } from '@chakra-ui/react';
import Link from 'next/link';

type NavItemProps = {
  label?: string;
  link?: string;
  textStyle: string;
  active?: boolean;
};

export const NavItem = ({ label, link, active, textStyle }: NavItemProps) => {
  if (active) {
  }
  // const navItemUnderline = active ? '100%' : '0%';
  return (
    <Link href={`${link || '/'}`} passHref>
      <Button
        mx="1rem"
        py="1.5rem"
        px=".5rem"
        backgroundColor="transparent"
        color="secondary.dorian"
        _hover={{
          color: 'black',
          _before: {
            width: '100%',
          },
        }}
        _active={{
          textColor: 'primary.lightGray.500',
        }}
        _focus={{
          color: 'black',
          _before: {
            width: '100%',
          },
        }}
        _before={{
          transition: '300ms',
          height: '5px',
          content: '""',
          position: 'absolute',
          backgroundColor: 'black',
          // height: "0%",
          width: '0%',
          bottom: '0px',
        }}
      >
        <Text textStyle={textStyle}>{label}</Text>
      </Button>
    </Link>
  );
};
