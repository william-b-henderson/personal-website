import { Button, Text } from '@chakra-ui/react';
import Link from 'next/link';

interface ProjectCardProps {
  link: string;
  linkText: string;
  variant?: string;
}

export const GreenButton = ({ link, linkText, variant }: ProjectCardProps) => {
  const textStyle = variant !== null ? variant : 'sec3';
  return (
    <Link href={link} passHref>
      <Button
        width="100%"
        borderRadius="0px"
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
      >
        <Text textStyle={textStyle} whiteSpace={'nowrap'} textColor="secondary.dorian">
          {linkText}
        </Text>
      </Button>
    </Link>
  );
};
