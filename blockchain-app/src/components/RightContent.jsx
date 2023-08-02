import React from 'react';
import { Box, Input, Button, Text } from '@chakra-ui/react';

const RightContent = () => {
  

  return (
    <Box width={{ base: '100%', md: '80%' }} p={4}>
      <Box display={{ base: 'block', md: 'flex' }} justifyContent="space-between" alignItems="center">
        <Input placeholder="Search" mb={{ base: 4, md: 0 }} />
        <Button colorScheme="blue">Connect</Button>
      </Box>
      <Text fontSize="lg" fontWeight="bold" my={4}>
        Data Cards:
      </Text>
      {/* Data Cards */}
    </Box>
  );
};

export default RightContent;
