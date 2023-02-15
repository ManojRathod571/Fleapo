import React from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import Heading from "../molecules/Heading";
import Tag from "../molecules/Tag";
import Students from "../images/students.png";

let data = [
  { id: 1, tag: "Worksheets" },
  { id: 2, tag: "Tools" },
  { id: 3, tag: "Live sessions" },
  { id: 4, tag: "Q&A" },
  { id: 5, tag: "Freedom Community" },
  { id: 6, tag: "video tutorials" },
];

const HeroLeftGrid = () => {
  return (
    <Box>
      <Heading
        heading="HACK YOUR WEALTH JOURNEY INSIDE THE"
        textColor="white"
      />
      <Heading heading="ONE PERCENT FINANCE CLUB" textColor="#EB7C69" />
      <Text
        fontFamily="'Inter'"
        fontWeight="600"
        fontSize="18px"
        lineHeight="26px"
        color="#EB7C69"
        mt="20px"
      >
        A lifetime access on-demand program that will transform your wealth
        planning and make you say - “Bro! I’m financially sorted!”
      </Text>
      <Text
        fontFamily="'Inter'"
        fontWeight="400"
        fontSize="16px"
        lineHeight="26px"
        color="white"
        mt="20px"
      >
        BONUS :
      </Text>

      <Flex flexWrap="wrap" gap={2} mt="10px">
        {data.map((item) => {
          return <Tag key={item.id} {...item} />;
        })}
      </Flex>

      <Text
        fontFamily="'Inter'"
        fontWeight="400"
        fontSize="16px"
        lineHeight="26px"
        color="#FFFFFF"
        mt="20px"
      >
        and step-by-step templates that you can instantly download and keep
        FOREVER!
      </Text>

      <Button
        fontFamily="'Inter'"
        fontWeight="700"
        fontSize="20px"
        w="480px"
        h="64px"
        bg="#EB7C69"
        mt="60px"
        borderRadius="10px"
        color="white"
        _hover={{ backgroundColor: "#EB7C69" }}
        boxShadow="0px 0px 10px 5px rgba(235, 124, 105, 0.25)"
      >
        Yes! I want to get it now!
      </Button>

      <Flex mt="20px" align="center">
        <Box mr="16px">
          <Image src={Students} alt="students" w="" h="" />
        </Box>
        <Text
          fontFamily="'Inter'"
          fontWeight="400"
          fontSize="16px"
          color="white"
        >
          Students Join in India’s Top Finance Club
        </Text>
      </Flex>
    </Box>
  );
};

export default HeroLeftGrid;
