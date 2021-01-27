import React from 'react';

import { Flex, Heading, Text } from '@chakra-ui/react';

type Props = {
  number?: number;
  description?: string;
};

const Card = ({ number = 48, description = 'Customers' }: Props) => {
  return (
    <Flex
      backgroundColor="mainColor"
      borderRadius="20px"
      padding="30px"
      flexDirection="column"
      justifyContent="flex-start"
    >
      <Heading as="h1" fontWeight="700" fontSize="60px">
        {number}
      </Heading>
      <Text as="p" fontSize="18px">
        {description}
      </Text>
    </Flex>
  );
};

export default Card;
