import React from "react";
import A from './images/HH LOGO.png'
import {
  Box,
  Flex,
  Wrap,
  Text,
  WrapItem,
  Divider,
  Image,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  
  return (
    <Flex justifyContent={"center"} bg="#000" color="#cbcbcb">
      <Flex w="1300px" p="30px 0px" flexDirection={"column"} gap="1rem">
        <Wrap spacingX={7} fontWeight="semibold"
        cursor="pointer"
         _hover={{ color: "white" }}
         _focus={{ boxShadow: "outline" }}
        color="#888" >
             <RouterLink to="/about">
              
          
          <WrapItem cursor="pointer" >About Us</WrapItem>
          </RouterLink>
          <WrapItem>Terms & Conditions</WrapItem>
          <WrapItem>Privacy Policy</WrapItem>
          <WrapItem>Interest-Based Advertising</WrapItem>
          <WrapItem>Anti-Discrimminatory Policy</WrapItem>
          <WrapItem>Blog</WrapItem>
          <WrapItem>Reviews</WrapItem>
          <WrapItem>Near Me</WrapItem>
          <WrapItem>Careers</WrapItem>
          <WrapItem>Gift Cards</WrapItem>
          <WrapItem>Contact Us</WrapItem>
          <WrapItem>Quick Links</WrapItem>
        </Wrap>
        <Divider orientation="horizontal" color="gray" size="4px" />
        <Text fontSize="18px" color="#fffff7" fontWeight="semibold">
          Serving In India
        </Text>
        <Divider orientation="horizontal" />
        <Flex justifyContent={"space-between"}>
          <Box display="flex" alignItems="center" gap="1rem">
          <RouterLink to="/">
            <Image
              src={A}
              alt="ucLogo"
              h="150"
              w="150"
            />
            </RouterLink>
            <Text fontSize="12px">
              © 2023-24 HammerHand Technologies India Pvt. Ltd
            </Text>
          </Box>
          <Flex alignItems="center" gap=".5rem">
            <Box h="30px" w="30px" bg="white" rounded={"md"}>
                <a href="" target="_blank">
              <Image src="https://img.icons8.com/ios/2x/twitter.png" />
              </a>
            </Box>
            <Box h="30px" w="30px" bg="white" rounded="md">
                <a href="" target="_blank">
              <Image src="https://img.icons8.com/ios/2x/facebook.png" />
              </a>
            </Box>
            <Box h="30px" w="30px" bg="white" rounded={"md"}>
            <a href="" target="_blank">
              <Image src="https://img.icons8.com/ios/2x/instagram.png" />
              </a>
            </Box>
            <Box h="30px" w="30px" bg="white" rounded={"md"}>
            <a href="" target="_blank">
              <Image src="https://img.icons8.com/ios/2x/youtube.png" />
              </a>
            </Box>
            <Box h="30px" w="30px" bg="white" rounded={"md"}>
            <a href="" target="_blank">
              <Image src="https://img.icons8.com/ios/2x/linkedin.png" />
              </a>
            </Box>
            <Box h="30px" w="30px" bg="white" rounded={"md"}>
            <a href="">
              <Image src="https://img.icons8.com/ios/2x/pinterest.png" />
              </a>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

 export default Footer
