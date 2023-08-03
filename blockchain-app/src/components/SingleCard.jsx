import React from 'react'
import { Flex, Text,Grid,Card  } from "@chakra-ui/react";

const SingleCard = ({el}) => {

  return (
    <Grid
    
    templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
    gap={2}
  >
    <Card
      pt={4}
      className="SingleCard"
      bg="#390554"
      color="white"
    >
      <Text mb={"12px"} className="headtext" ml={"32px"}>
        Basic Info
      </Text>
      <Flex flexDirection={["row", "row"]}>
        <Text mb={"8px"} className="textleft" ml={"32px"}>
          Pair Created at
        </Text>
        <Text ml={"52px"}>
          {el?.baseToken?.name.substring(0, 8)}
        </Text>
      </Flex>
      <Flex flexDirection={["row", "row"]}>
        <Text mb={"8px"} className="textleft" ml={"32px"}>
          Symbol
        </Text>
        <Text ml={"108px"}>{el?.baseToken?.symbol}</Text>
      </Flex>
      <Flex flexDirection={["row", "row"]}>
        <Text mb={"8px"} className="textleft" ml={"32px"}>
          Dex ID
        </Text>
        <Text ml={"116px"}>#{el?.dexId.substring(0, 4)}</Text>
      </Flex>
      <Flex flexDirection={["row", "row"]}>
        <Text mb={"8px"} className="textleft" ml={"32px"}>
          Pair Address
        </Text>
        <Text ml={"71px"}>
          #{el?.pairAddress.substring(0, 4)}
        </Text>
      </Flex>
    </Card>

    <Card
      pt={6}
      className="SingleCard"
      bg="#390554"
      color="white"
    >
      <Text className="headtext" ml={"32px"} mb={"12px"}>
        Basic Token
      </Text>
      <Flex flexDirection={["row", "row"]}>
        <Text className="textleft" ml={"32px"}>
          Name
        </Text>
        <Text ml={"117px"}>
          {el?.baseToken?.name.substring(0, 8)}
        </Text>
      </Flex>
      <Flex flexDirection={["row", "row"]}>
        <Text className="textleft" ml={"32px"}>
          Symbol
        </Text>
        <Text ml={"108px"}>{el?.baseToken?.symbol}</Text>
      </Flex>

      <Flex flexDirection={["row", "row"]}>
        <Text className="textleft" ml={"32px"}>
          Address
        </Text>
        <Text ml={"100px"}>
          #{el?.pairAddress.substring(0, 4)}
        </Text>
      </Flex>
    </Card>

    <Card
      pt={6}
      className="SingleCard"
      bg="#390554"
      color="white"
    >
      <Text className="headtext" ml={"32px"} mb={"12px"}>
        Quote Token
      </Text>
      <Flex flexDirection={["row", "row"]}>
        <Text className="textleft" ml={"32px"}>
          Name
        </Text>
        <Text ml={"117px"}>
          {el?.quoteToken?.name.substring(0, 8)}
        </Text>
      </Flex>
      <Flex flexDirection={["row", "row"]}>
        <Text className="textleft" ml={"32px"}>
          Symbol
        </Text>
        <Text ml={"108px"}>{el?.quoteToken?.symbol}</Text>
      </Flex>

      <Flex flexDirection={["row", "row"]}>
        <Text className="textleft" ml={"32px"}>
          Address
        </Text>
        <Text ml={"100px"}>
          #{el?.pairAddress.substring(0, 4)}
        </Text>
      </Flex>
    </Card>

    <Card
      pt={6}
      className="SingleCard"
      bg="#390554"
      color="white"
    >
      <Text className="headtext" ml={"32px"} mb={"12px"}>
        Price
      </Text>
      <Flex flexDirection={["row", "row"]}>
        <Text className="textleft" ml={"32px"}>
          Price Native
        </Text>
        <Text ml={"77px"}>{el?.priceNative}</Text>
      </Flex>
      <Flex flexDirection={["row", "row"]}>
        <Text className="textleft" ml={"32px"}>
          Symbol
        </Text>
        <Text ml={"108px"}>{el?.priceUsd}</Text>
      </Flex>
    </Card>
  </Grid>
  )
}

export default SingleCard