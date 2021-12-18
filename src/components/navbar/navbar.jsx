import React from "react";
import { Link } from "react-router-dom";
import { Flex, Spacer, Text } from "@chakra-ui/react";

function navbar() {
  return (
    <nav>
      <Flex color="white" bg="blue.800" p={3}>
        <Spacer />
        <Link to="/">
          <Text
            fontWeight="semibold"
            _hover={{ color: "gray.800" }}
            fontSize="xl"
          >
            Home
          </Text>
        </Link>
        <Spacer />
        <Link to="/userForm">
          <Text
            fontWeight="semibold"
            _hover={{ color: "gray.800" }}
            fontSize="xl"
          >
            User Form
          </Text>
        </Link>
        <Spacer />
        <Link to="/notice">
          <Text
            fontWeight="semibold"
            _hover={{ color: "gray.800" }}
            fontSize="xl"
          >
            Notice
          </Text>
        </Link>
        <Spacer />
      </Flex>
    </nav>
  );
}

export default navbar;
