import { IconButton } from '@chakra-ui/react';
import Link from 'next/link';

interface ProjectCardProps {
  link: string;
  icon: JSX.Element;
  label: string;
}

export const GreenIconLinkButton = ({ link, label, icon }: ProjectCardProps) => {
  return (
    <Link href={link} passHref>
      <a target="_blank" rel="noopener noreferrer">
        <IconButton
          aria-label={label}
          w="5rem"
          h="5rem"
          backgroundColor="primary.meadow.100"
          _hover={{
            backgroundColor: 'primary.meadow.200',
          }}
          _active={{
            backgroundColor: 'primary.meadow.400',
          }}
          _focus={{
            backgroundColor: 'primary.meadow.200',
            borderColor: '#719ECE',
            boxShadow: '0 0 10px #719ECE',
          }}
          icon={icon}
        />
      </a>
    </Link>
  );
};
