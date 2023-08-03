import React from "react";
import { Box } from "@chakra-ui/react";

const Footer = () => {

  return (
    <Box
      py={4}
      bottom={0}
      style={{
        position: "fixed",
        width: "100%",
        height: "60px",
        backgroundColor: "#F30050",
        margin: "auto",
        zIndex: 10000,
        marginTop: "350px",
      }}
    ></Box>
  );
};

export default Footer;
