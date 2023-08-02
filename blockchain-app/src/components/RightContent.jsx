import React from "react";
import {
  Box,
  Input,
  Button,
  Text,
  Card,
  CardBody,
  Grid,
  Flex,
} from "@chakra-ui/react";
import "./RightContent.css";
const RightContent = ({ data }) => {
  return (
    <Box
      width={{ base: "100%", md: "100%" }}
      height={"auto"}
      p={4}
      ml={["0px", "288px"]}
      className="main-container"
    >
      <Box
        display={{ base: "block", md: "flex" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Input placeholder="Search" mb={{ base: 4, md: 0 }} />
        <Button colorScheme="blue">Connect</Button>
      </Box>
      <Text fontSize="lg" fontWeight="bold" my={4}>
        Data Cards:
      </Text>
      <Grid>
        {data.length > 0 &&
          data?.map((el, i) => (
            <Grid key={Date.now()+Math.random()} gridTemplateColumns="repeat(4, 1fr)">
              <Card className="SingleCard" bg="#390554"
              color= "white" >
                <Text >Base Token</Text>
                <Flex flexDirection={["column", "row"]} 
                justifyContent={"space-around"}>
                  <Text>Pair Created at  </Text>
                  <Text>{el?.baseToken?.name}</Text>
                </Flex>
                <Flex flexDirection={["column", "row"]} 
                justifyContent={"space-around"}>
                  <Text>Symbol</Text>
                  <Text>{el?.baseToken?.name}</Text>
                </Flex>
              </Card>
              <Card className="SingleCard" bg="#390554"
              color= "white" >
                <Text >Base Token</Text>
                <Flex flexDirection={["column", "row"]} 
                justifyContent={"space-around"}>
                  <Text>Pair Created at  </Text>
                  <Text>{el?.baseToken?.name}</Text>
                </Flex>
                <Flex flexDirection={["column", "row"]} 
                justifyContent={"space-around"}>
                  <Text>Symbol</Text>
                  <Text>{el?.baseToken?.name}</Text>
                </Flex>
              </Card>
              <Card className="SingleCard" bg="#390554"
              color= "white" >
                <Text >Base Token</Text>
                <Flex flexDirection={["column", "row"]} 
                justifyContent={"space-around"}>
                  <Text>Pair Created at  </Text>
                  <Text>{el?.baseToken?.name}</Text>
                </Flex>
                <Flex flexDirection={["column", "row"]} 
                justifyContent={"space-around"}>
                  <Text>Symbol</Text>
                  <Text>{el?.baseToken?.name}</Text>
                </Flex>
              </Card>
              <Card className="SingleCard" bg="#390554"
              color= "white" >
                <Text >Base Token</Text>
                <Flex flexDirection={["column", "row"]} 
                justifyContent={"space-around"}>
                  <Text>Pair Created at  </Text>
                  <Text>{el?.baseToken?.name}</Text>
                </Flex>
                <Flex flexDirection={["column", "row"]} 
                justifyContent={"space-around"}>
                  <Text>Symbol</Text>
                  <Text>{el?.baseToken?.name}</Text>
                </Flex>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default RightContent;
