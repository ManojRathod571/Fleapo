import { Text } from "@chakra-ui/react";
import React from "react";

const Heading = ({ heading, textColor }) => {
  return (
    <Text
      fontFamily="'Sora'"
      fontWeight="800"
      fontSize={{ base: "40px", md: "30px", lg: "48px" }}
      lineHeight={{ md: "40px", lg: "50px" }}
      textTransform="uppercase"
      mixBlendMode="normal"
      color={textColor}
    >
      {heading}
    </Text>
  );
};

export default Heading;
