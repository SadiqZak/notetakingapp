import React, { useContext } from "react";
import colors from "@chakra-ui/theme";
import { AuthContext } from "../../context/auth-context";
import { FaSun, FaMoon  } from "react-icons/fa";
import { FiMenu } from 'react-icons/fi'
import {
  Flex, 
  Heading,
  VStack,
  Button,
  HStack,
  Container,
  useColorMode,
  useColorModeValue,
  Box,
  useBreakpointValue,
  IconButton,
} from "@chakra-ui/react";

const Home = () => {
  const { stateAuth } = useContext(AuthContext);
  const { token } = stateAuth;
  const {toggleColorMode, colorMode} = useColorMode()
  const isDesktop = useBreakpointValue({base: false, lg:true})

  return (
   <Box as="section" pb={{base:'12', md:'24'}} w="100%">
    <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')} w="100%">
      <Flex p={{base:'4', lg:'5'}} w="100%">
        <HStack spacing='10' justify='space-between' w="100%">
          <Heading size="md">NoteApp</Heading>
          {
            isDesktop ? (
              <HStack spacing='2'>
                <HStack spacing='2'>
                  <Button variant="ghost" >Login</Button>
                  <Button variant="solid" colorScheme="blue">Signup</Button>
                </HStack>
              <IconButton icon={colorMode==="light"? <FaMoon/>: <FaSun/>} onClick={toggleColorMode} />
              </HStack>
            ):(
              <IconButton
              variant="ghost"
              icon={<FiMenu fontSize="1.25rem" />}
              aria-label="Open Menu"
              />
            )
          
          }
        </HStack>
      </Flex>
    </Box>
   </Box>
  );
};

export default Home;

