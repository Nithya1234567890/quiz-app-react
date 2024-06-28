import {
    Avatar,
  Box,
  Flex,
  HStack,
  IconButton,
  Stack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import logo from '../../Assets/logo.png'
import { Text } from '@chakra-ui/react';

import { Link as ReachLink } from "react-router-dom";
import {HamburgerIcon,CloseIcon,InfoIcon} from '@chakra-ui/icons'
import { FaHome } from 'react-icons/fa'
import React from "react";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        bg={useColorModeValue("#212832", "gray.900")}
        px={4}
        borderBottom="1px solid"
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <IconButton
            bg="transparent"
            _hover={{
              bg: "transparent",
            }}
            size="md"
            icon={isOpen ? <CloseIcon  color="white"/> : <HamburgerIcon  color="white"/>}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems="center">
            <Avatar size="sm" src={logo} w={10} h={10} />
            <HStack as="nav"spacing={4} display={{base:'none',md:'flex'}}>
            <ReachLink
                px={2}
                py={1}
                rounded="md"
                _hover={{ textDecoration: 'none' }}
                to="/quiz-app-react"
              >
              <HStack className="d-flex justify-content-center align-items-center" justifyContent="center" alignItems="center">
                <FaHome color="white"/>
                <Text className="mt-3" fontWeight="bold" color="white">Home</Text>
              </HStack>
              </ReachLink>
              <ReachLink
                px={2}
                py={1}
                rounded="md"
                _hover={{ textDecoration: 'none' }}
                to="quiz-app-react/about"
              >
                <HStack className="d-flex justify-content-center align-items-center" justifyContent="center" alignItems="center" >
                    <InfoIcon color="white"/>
                    <Text className="mt-3" fontWeight="bold" color="white">About</Text>
                </HStack>
              </ReachLink>
            </HStack>
          </HStack>
        </Flex>
        {isOpen?(
            <Box pb={4} display={{ md: 'none' }}>
            <Stack as="nav" spacing={4}>
              <ReachLink
                px={2}
                py={1}
                rounded="md"
                _hover={{ textDecoration: 'none' }}
                to="quiz-app-react/"
              >
                <HStack className="d-felx justify-content-center align-items-center" justifyContent="center" alignItems="center">
                    <FaHome color="white"/>
                    <Text className="mt-3" fontWeight="bold" color="white">Home</Text>
                </HStack>
              </ReachLink>
              <ReachLink
              px={2}
                py={1}
                rounded="md"
                _hover={{ textDecoration: 'none' }}
                to="quiz-app-react/about"
              >
                <HStack className="d-flex justify-content-center align-items-center" justifyContent="center" alignItems="center">
                    <InfoIcon color="white"/>
                    <Text className="mt-3" fontWeight="bold" color="white">About</Text>
                </HStack>
              </ReachLink>
              </Stack>
              </Box>
        ):null}
      </Box>
    </>
  );
}
