import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Tag = ({ tag }) => {
  return (
    <Box px="10px" py="8px" bg="#191726" borderRadius="6px" className="Tags">
      <Text
        className="text"
        fontFamily="Inter"
        fontWeight="500"
        fontSize={{ base: "14px", lg: "16px" }}
        lineHeight="19px"
        letterSpacing="0.05em"
        textTransform="uppercase"
        width="fit-content"
        color="#FFFFFF"
      >
        {tag}
      </Text>
    </Box>
  );
};

export default Tag;
