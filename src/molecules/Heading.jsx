import { Text } from "@chakra-ui/react";
import React from "react";

const Heading = ({ heading, textColor }) => {
  return (
    <Text
      fontFamily="'Sora'"
      fontWeight="800"
      fontSize="48px"
      lineHeight="50px"
      textTransform="uppercase"
      mixBlendMode="normal"
      color={textColor}
    >
      {heading}
    </Text>
  );
};

export default Heading;
