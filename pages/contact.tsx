import { Flex } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { SiLinkedin, SiHandshake } from 'react-icons/si';
import { MdMail } from 'react-icons/md';
import { GreenIconLinkButton } from '../components/Buttons';

import { PageLayout } from '../components/PageLayout';

const ContactPage: NextPage = () => {
  return (
    <Flex justify="center">
      <PageLayout currentPage="contact">
        <Flex my="1rem" justifyContent="space-around" width="20rem">
          <GreenIconLinkButton
            label="LinkedIn"
            link="https://www.linkedin.com/in/william-b-henderson/"
            icon={<SiLinkedin color="white" size={56} />}
          />
          <GreenIconLinkButton
            label="Handshake"
            link="https://berkeley.joinhandshake.com/stu/users/20650195"
            icon={<SiHandshake color="white" size={56} />}
          />
          <GreenIconLinkButton
            label="Email Me"
            link="mailto:william_henderson@berkeley.edu"
            icon={<MdMail color="white" size={56} />}
          />
        </Flex>
      </PageLayout>
    </Flex>
  );
};

export default ContactPage;
