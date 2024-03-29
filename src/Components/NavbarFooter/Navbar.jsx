import React from "react";
import A from './images/HH LOGO.png'
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import Signin from "../../Pages/shubham/LoginSignin/Signin";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const Links = [
    // { title: "Blog", link: "/blog" },
    { title: "My Bookings", link: "/booking" },
    { title: "Register as Worker", link: "/" },
   
  ];

  return (
    <>
      <Box
       
        bg={"blackAlpha.900"}
        color={"whiteAlpha.900"}
        px={4}
       
        w={"100%"}
      >
        <Flex
          h={16}
          alignItems={"center"}
          fontWeight={"bold"}
          justifyContent={"space-around"}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            color={"blackAlpha.900"}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            border={"1px  red"}
            width={"90%"}
            spacing={8}
            alignItems={"center"}
          >
            <Box>
              <RouterLink to={`/allservices`}>
                <Image
                  src={A}
                  width={"30%"}
                />
              </RouterLink>
            </Box>
            <HStack
              as={"nav"}
              spacing={20}
              display={{ base: "none", md: "flex" }}
              
            >
              {Links.map((link, index) => (
                <RouterLink to={link.link} key={index}>
                  {link.title}
                </RouterLink>
              ))}
            </HStack>

        
            <Signin></Signin>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link, index) => (
                <RouterLink to={link.link} key={index}>
                  {link.title}
                </RouterLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
