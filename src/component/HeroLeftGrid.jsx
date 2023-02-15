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
        fontSize={{ base: "15px", lg: "18px" }}
        lineHeight="26px"
        color="#EB7C69"
        mt={{ md: "10px", lg: "20px" }}
      >
        A lifetime access on-demand program that will transform your wealth
        planning and make you say - “Bro! I’m financially sorted!”
      </Text>
      <Text
        fontFamily="'Inter'"
        fontWeight="400"
        fontSize={{ md: "14px", lg: "16px" }}
        lineHeight="26px"
        textAlign={{ base: "center", lg: "none" }}
        color="white"
        mt={{ md: "10px", lg: "20px" }}
      >
        BONUS :
      </Text>

      <Flex
        flexWrap="wrap"
        gap={{ md: "1", lg: "2" }}
        mt="10px"
        justify={{ base: "center", lg: "unset" }}
      >
        {data.map((item) => {
          return <Tag key={item.id} {...item} />;
        })}
      </Flex>

      <Text
        fontFamily="'Inter'"
        fontWeight="400"
        fontSize={{ base: "14px", lg: "16px" }}
        lineHeight={{ lg: "26px" }}
        textAlign={{ base: "center", md: "unset" }}
        color="#FFFFFF"
        mt={{ base: "10px", lg: "20px" }}
      >
        and step-by-step templates that you can instantly download and keep
        FOREVER!
      </Text>
      <Flex justify={{ base: "center", md: "unset" }}>
        <Button
          fontFamily="Inter"
          fontWeight="700"
          fontSize={{ base: "16px", lg: "20px" }}
          w={{ base: "auto", lg: "480px" }}
          h={{ base: "40px", lg: "64px" }}
          bg="#EB7C69"
          mt={{ base: "40px", md: "25px", lg: "60px" }}
          borderRadius="10px"
          color="white"
          _hover={{ backgroundColor: "#EB7C69" }}
          boxShadow="0px 0px 10px 5px rgba(235, 124, 105, 0.25)"
        >
          Yes! I want to get it now!
        </Button>
      </Flex>

      <Flex mt="20px" align="center">
        <Box mr={{ base: "10px", lg: "16px" }}>
          <Image src={Students} alt="students" w="" h="" />
        </Box>
        <Text
          fontFamily="'Inter'"
          fontWeight="400"
          fontSize={{ base: "13px", lg: "16px" }}
          color="white"
        >
          Students Join in India’s Top Finance Club
        </Text>
      </Flex>
    </Box>
  );
};

export default HeroLeftGrid;
