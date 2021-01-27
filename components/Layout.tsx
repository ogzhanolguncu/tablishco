import React, { ReactNode } from 'react';

import { Flex } from '@chakra-ui/react';

import Navbar from './Navbar';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Flex padding="30px">
        <Flex
          w="100%"
          direction="column"
          mx="auto"
          p={5}
          backgroundColor="bgColor"
          borderRadius="30px"
        >
          <Navbar />
          {children}
        </Flex>
      </Flex>
    </>
  );
};

export default Layout;
