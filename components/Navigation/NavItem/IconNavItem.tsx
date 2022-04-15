import { IconButton } from '@chakra-ui/react';
import Link from 'next/link';

type NavItemProps = {
  label: string;
  link: string;
  icon: JSX.Element;
};

export const IconNavItem = ({ label, link, icon }: NavItemProps) => {
  return (
    <Link href={`${link || '/'}`} passHref>
      <a target="_blank" rel="noopener noreferrer">
        <IconButton
          aria-label={label}
          mx="1rem"
          py="1.5rem"
          px=".5rem"
          backgroundColor="transparent"
          color="secondary.dorian"
          icon={icon}
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
            color: 'black0',
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
            width: '0%',
            bottom: '0px',
          }}
        />
      </a>
    </Link>
  );
};
