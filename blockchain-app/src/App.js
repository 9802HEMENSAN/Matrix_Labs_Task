import React, { useState } from 'react';
import { ChakraProvider, Container, Input, Button, VStack, IconButton, useMediaQuery , Flex} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import MobileSidebar from './components/MobileSidebar';
import Sidebar from './components/Sidebar';
import RightContent from './components/RightContent';
 

const App = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
      <Flex  flexDirectionn={["column","row"]}>
        <VStack  alignItems="flex-start">
          {isMobile ? (
            <IconButton
              icon={<HamburgerIcon />}
              onClick={toggleMobileSidebar}
              alignSelf="flex-end"
              variant="ghost"
            />
          ) : (
            <Sidebar />
          )}
        </VStack>
        {isMobile && (
          <MobileSidebar isOpen={isMobileSidebarOpen} onClose={toggleMobileSidebar} />
        )}
        <RightContent/>
      </Flex>
  );
};

export default App;
