import React, { useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Flex, 
  VStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const Home = () => {
  const { stateAuth } = useContext(AuthContext);
  const {toggleColorMode, colorMode} = useColorMode()
  const { token } = stateAuth;
  return (
    <Flex
    width='100%'
    height="3.5rem"
    pos="sticky"
    align="center"
    >
      Navbar
      <FontAwesomeIcon
          icon={colorMode === "light" ? "sun" : "moon"}
          onClick={toggleColorMode}
        />
    </Flex>
  );
};

export default Home;
