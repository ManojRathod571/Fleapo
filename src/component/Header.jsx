import React from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import DateAndTime from "../molecules/DateAndTime";
import gift from "../images/gift.png";

const data = [
  {
    id: 1,
    text: "7",
  },
  {
    id: 2,
    text: "12",
  },
  {
    id: 3,
    text: "10",
  },
  {
    id: 4,
    text: "34",
  },
];

const Header = () => {
  return (
    <Flex
      h="61px"
      bg="#29263B"
      px="50px"
      justify="space-between"
      align="center"
      position="sticky"
      top="0"
      left="0"
      right="0"
      zIndex={10}
    >
      <Flex align="center">
        <Text
          fontFamily="'Inter'"
          fontSize="14px"
          fontWeight="500"
          color="rgba(255, 255, 255, 0.8)"
          mr="10px"
        >
          Ending in
        </Text>

        <Flex>
          {data.map((item) => {
            return <DateAndTime key={item.id} {...item} />;
          })}
        </Flex>
      </Flex>
      <Flex align="center">
        <Image src={gift} alt="gift" w="22px" h="19px" />
        <Text
          fontFamily="'Inter'"
          fontSize="16px"
          fontWeight="400"
          color=" #F3F9FF"
          ml="10px"
        >
          Save Big & Get bonuses worth Rs. 9999 and more
        </Text>
        <Button
          fontFamily="'Inter'"
          fontSize="14px"
          fontWeight="500"
          textAlign="center"
          letterSpacing="0.05em"
          textTransform="uppercase"
          borderRadius="8px"
          bg="#1F1D2B"
          color=" #F3F9FF"
          ml="20px"
          w="122px"
          h="41px"
          _hover={{ backgroundColor: "#1F1D2B" }}
        >
          Get Offer
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
