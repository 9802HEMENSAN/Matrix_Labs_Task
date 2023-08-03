import React, { useEffect, useState } from "react";
import {
  ChakraProvider,
  Container,
  Input,
  Button,
  VStack,
  IconButton,
  useMediaQuery,
  Flex,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import MobileSidebar from "./components/MobileSidebar";
import Sidebar from "./components/Sidebar";
import RightContent from "./components/RightContent";
import axios from "axios";
import Footer from "./components/Footer";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";

const chains = [arbitrum, mainnet, polygon];
const projectId = "ef3b74b786833f78cefce00b2f4a5452";

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

const App = () => {
  const [isMobile] = useMediaQuery("(max-width: 508px)");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [active, setactive] = useState(true);
  const [Data, setData] = useState([]);
  const [searchInput, setsearchInput] = useState(
    "0x2170Ed0880ac9A755fd29B2688956BD959F933F8"
  );

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };
  const fetchData = async (url) => {
    try {
      const fetchedData = await axios.get(url);
      console.log(fetchedData.data.pairs);
      if (fetchedData.data.pairs) {
        setData(fetchedData.data.pairs);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let url = `https://api.dexscreener.com/latest/dex/tokens/${
      searchInput || "0x2170Ed0880ac9A755fd29B2688956BD959F933F8"
    }`;
    if (active) {
      url = `https://api.dexscreener.com/latest/dex/tokens/${
        searchInput || "0x2170Ed0880ac9A755fd29B2688956BD959F933F8"
      }`;
    }
    if (!active) {
      url = `https://api.dexscreener.com/latest/dex/search?q=${
        searchInput || "0x2170Ed0880ac9A755fd29B2688956BD959F933F8"
      }`;
    }
    fetchData(url);
  }, [searchInput, active]);

  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <Flex flexDirectionn={["column", "row"]}>
          <VStack alignItems="flex-start">
            {isMobile ? (
              <IconButton
                icon={<HamburgerIcon />}
                onClick={toggleMobileSidebar}
                alignSelf="flex-end"
                variant="ghost"
              />
            ) : (
              <Sidebar active={active} setactive={setactive} />
            )}
          </VStack>
          {isMobile && (
            <MobileSidebar
              isOpen={isMobileSidebarOpen}
              onClose={toggleMobileSidebar}
              active={active}
              setactive={setactive}
            />
          )}
          <RightContent
            data={Data}
            active={active}
            setsearchInput={setsearchInput}
          />
        </Flex>
        <Footer />
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
};

export default App;
