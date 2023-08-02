import React, { useEffect, useState } from 'react';
import { ChakraProvider, Container, Input, Button, VStack, IconButton, useMediaQuery , Flex} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import MobileSidebar from './components/MobileSidebar';
import Sidebar from './components/Sidebar';
import RightContent from './components/RightContent';
import axios from 'axios';

const App = () => {
  const [isMobile] = useMediaQuery('(max-width: 508px)');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [active, setactive] = useState(true)
  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };
 const [Data, setData] = useState([])
  const fetchData= async ()=>{
     try {
      const fetchedData=await axios.get("https://api.dexscreener.com/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8")
      console.log(fetchedData.data.pairs)
      setData(fetchedData.data.pairs)
     } catch (error) {
       console.log(error)
     }
  }
  
  useEffect(() => {
    fetchData()
  },[])

  return (
      <Flex  flexDirectionn={[ "column","row"]}>
        <VStack  alignItems="flex-start">
          {isMobile ? (
            <IconButton
              icon={<HamburgerIcon />}
              onClick={toggleMobileSidebar}
              alignSelf="flex-end"
              variant="ghost"
            />
          ) : (
            <Sidebar active={active} setactive={ setactive }/>
          )}
        </VStack>
        {isMobile && (
          <MobileSidebar isOpen={isMobileSidebarOpen} onClose={toggleMobileSidebar} active={active} setactive={ setactive } />
        )}
        <RightContent data={Data}/>
      </Flex>
  );
};

export default App;
