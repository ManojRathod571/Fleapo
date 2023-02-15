import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const DateAndTime = ({ text }) => {
  return (
    <Flex
      justify="center"
      align="center"
      bg="#1F1D2B"
      w="40px"
      h="40px"
      borderRadius="6px"
      mr="10px"
    >
      <Text fontFamily="'Sora'" fontSize="22px" fontWeight="600" color="white">
        {text}
      </Text>
    </Flex>
  );
};

export default DateAndTime;
