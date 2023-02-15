import React from "react";

import { Box, Grid, Image } from "@chakra-ui/react";
import backgroundImage from "../images/bgLayout.png";
import groupBg from "../images/groupBg.png";
import "../App.css";
import HeroLeftGrid from "./HeroLeftGrid";
import HeroRightGrid from "./HeroRightGrid";

const Hero = () => {
  return (
    <Box
      bg="#1f1d2b"
      h={{ base: "200vh", md: "75vh", lg: "118vh" }}
      position="relative"
    >
      <Box
        backgroundImage={`url(${backgroundImage})`}
        backgroundSize="cover"
        minHeight={{ base: "61vh", md: "44vh", lg: "98vh" }}
        mixBlendMode="overlay"
      />
      <Box
        position="absolute"
        top={{ base: "95px", lg: "287px" }}
        left={0}
        right={0}
        mixBlendMode="overlay"
        opacity="0.6"
      >
        <Image src={groupBg} alt="chart" w="100%" h="566px" />
      </Box>
      <Grid
        className="heading"
        gridTemplateColumns={{ base: "1fr", md: ".9fr 1fr" }}
        h="100vh"
        position="absolute"
        top={0}
      >
        <Box
          order={{ base: 2, md: 1 }}
          pl={{ base: "22px", md: "20px", lg: "51px" }}
          pr={{ base: "22px", md: "20px", lg: "70px" }}
          mt="80px"
        >
          <HeroLeftGrid />
        </Box>
        <Box
          ml={{ md: "auto" }}
          mr={{ md: "15px", lg: "21px" }}
          order={{ base: 1, md: 2 }}
        >
          <HeroRightGrid />
        </Box>
      </Grid>
    </Box>
  );
};

export default Hero;
