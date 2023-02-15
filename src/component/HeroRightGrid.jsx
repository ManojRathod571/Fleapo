import React from "react";
import { Box, Image } from "@chakra-ui/react";
import person from "../images/person.png";

const HeroRightGrid = () => {
  return (
    <Box mt="21px">
      <Image
        src={person}
        alt="person"
        w="auto"
        h={{ base: "550px", lg: "789px" }}
      />
    </Box>
  );
};

export default HeroRightGrid;
