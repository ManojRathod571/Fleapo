import React from "react";

import { Box, Grid, Image } from "@chakra-ui/react";
import backgroundImage from "../images/bgLayout.png";
import groupBg from "../images/groupBg.png";
import "../App.css";
import HeroLeftGrid from "./HeroLeftGrid";
import HeroRightGrid from "./HeroRightGrid";

const Hero = () => {
  return (
    <Box bg="#1f1d2b" h="118vh" position="relative">
      <Box
        backgroundImage={`url(${backgroundImage})`}
        backgroundSize="cover"
        minHeight="98vh"
        mixBlendMode="overlay"
      />
      <Box
        position="absolute"
        top="287px"
        left={0}
        right={0}
        mixBlendMode="overlay"
        opacity="0.6"
      >
        <Image src={groupBg} alt="chart" w="100%" h="566px" />
      </Box>
      <Grid
        className="heading"
        gridTemplateColumns=".9fr 1fr"
        h="100vh"
        position="absolute"
        top={0}
      >
        <Box pl="51px" pr="70px" mt="80px">
          <HeroLeftGrid />
        </Box>
        <Box ml="auto" mr="21px">
          <HeroRightGrid />
        </Box>
      </Grid>
    </Box>
  );
};

export default Hero;
