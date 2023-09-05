"use client";
import Image from "next/image";
import Link from "next/link";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

const Banner = ({ purpose }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    {purpose}
  </Flex>
);

const Home = () => {
  return (
    <main>
      <Banner purpose={"For Sale"} />
      <Banner purpose={"For Rent"} />
    </main>
  );
};

export default Home;
