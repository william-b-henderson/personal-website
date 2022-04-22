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
      </a>
    </Link>
  );
};
