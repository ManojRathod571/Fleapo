import React from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import AddPerson from "../images/addPerson.png";
import Gift from "../images/giftOne.png";

const Footer = () => {
  return (
    <Box
      display={{ base: "none", md: "none", lg: "flex" }}
      bg="#EB7C69"
      h="71px"
      w="100%"
      px="50px"
      position="sticky"
      bottom={0}
      left={0}
      right="0"
      justifyContent="space-between"
      align="center"
    >
      <Flex>
        <Image src={AddPerson} alt="AddPerson" />
        <Flex align="center">
          <Image src={Gift} alt="gift" />
          <Text
            fontFamily="'Inter'"
            fontWeight="400"
            fontSize="16px"
            lineHeight="19px"
            color="#F3F9FF"
            ml="10px"
          >
            Save Big & Get bonuses worth{" "}
            <span style={{ fontWeight: "600" }}>Rs. 9999 and more</span>
          </Text>
        </Flex>
      </Flex>

      <Button
        fontFamily="'Inter'"
        fontWeight="700"
        fontSize="16px"
        w="310px"
        h="47px"
        bg="white"
        borderRadius="8px"
        textTransform="uppercase"
        color="#EB7C69"
        _hover={{ backgroundColor: "white" }}
        boxShadow="0px 0px 10px 5px rgba(235, 124, 105, 0.25)"
      >
        Yes! I want to get it now!
      </Button>
    </Box>
  );
};

export default Footer;
