import React, { ReactNode } from 'react';

import { SimpleGrid } from '@chakra-ui/react';

type Props = {
  children?: ReactNode;
  title?: string;
};

const CardContainer = ({ children }: Props) => {
  return (
    <>
      <SimpleGrid
        columns={[1, 2, 3, 4]}
        spacing={5}
        w="100%"
        mx="auto"
        maxW="1260px"
        marginTop="30px"
      >
        {children}
      </SimpleGrid>
    </>
  );
};

export default CardContainer;
