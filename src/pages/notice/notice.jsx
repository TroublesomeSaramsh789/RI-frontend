import React from "react";
import { Flex, Text } from "@chakra-ui/react";

function notice(props) {
  const [needed, setNeeded] = React.useState();
  React.useEffect(() => {
    if (props.data.apiData) {
      console.log("true");
      setNeeded({ ...props.data.apiData.data });
    }
  }, [props.data.apiData]);
  return (
    <div>
      {needed ? (
        <Flex my="10" alignItems="center" flexDirection="column">
          <Text p="3" color="white" bg="blue.800" fontSize="3xl">
            Location: {needed.timezone}
          </Text>
          <Text fontSize="3xl">Weather : {needed.current.weather[0].main}</Text>
          <Text p="3" color="white" bg="blue.800" fontSize="3xl">
            Temperature: {(needed.current.temp - 273.15).toFixed(1)}°C
          </Text>
          <Text fontSize="2xl">
            Weather Discription: {needed.current.weather[0].description}
          </Text>
        </Flex>
      ) : (
        <Text>Loading</Text>
      )}
    </div>
  );
}

export default notice;
