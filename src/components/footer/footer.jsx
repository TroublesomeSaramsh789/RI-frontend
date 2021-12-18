import React from "react";
import { Text, Flex, Link } from "@chakra-ui/react";
function footer() {
  return (
    <Flex paddingX="10" paddingY="10" background="blue.100">
      <Flex flexDirection="column">
        <Text fontSize="2xl" fontWeight="semibold">
          Weather Emergency Alert System
        </Text>
        <Text fontSize="l" fontWeight="semibold">
          by Lorem ipsum.
        </Text>

        <Text
          w="60ch"
          my="5"
          color="grey.200"
          fontSize="12"
          fontWeight="semibold"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A et vero
          corporis quidem totam explicabo? Velit quos tempore voluptates id
          quasi dolores repellat excepturi error ullam. Rem explicabo aspernatur
          adipisci.
        </Text>
      </Flex>
    </Flex>
  );
}

export default footer;
