import Image from 'next/image';

import { Flex, Box } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      as="nav"
      mx="auto"
      maxWidth="1200px"
    >
      <Image src="/images/tablishco.svg" alt="Logo" width={141} height={34} />
      <Box
        width="54px"
        height="54px"
        borderRadius="50%"
        backgroundImage="url('/images/kedy.jpg')"
      />
    </Flex>
  );
};

export default Navbar;
