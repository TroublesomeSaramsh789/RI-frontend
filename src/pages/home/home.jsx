import React from "react";
import { Button, Flex, Spacer, Text } from "@chakra-ui/react";
import weatherAPI from "../../api/weatherAPI";
import { Link } from "react-router-dom";
import LocationForm from "../../components/locationForm/locationForm";
function home(props) {
  const [weatherData, setWeartherData] = React.useState();
  React.useEffect(() => {
    weatherAPI(props.data.location.district, setWeartherData);
  }, [props.data.location]);
  return (
    <Flex
      textAlign="center"
      alignItems="center"
      m="auto"
      my="10"
      width="80%"
      height="70vh"
      flexDirection="column"
    >
      <Text m="5" fontWeight="bold" color="blue.800" fontSize="5xl">
        Weather Emergency Alert System
      </Text>
      <Text w="90%" color="blue.800" fontSize="2xl">
        Are you in flood prone area? Choose your area to know more.
      </Text>

      <LocationForm {...props} />
      {weatherData ? (
        <Flex direction="column">
          <Text my="5" fontSize="3xl">
            {`Temprature in ${weatherData.data.name} is ${(
              weatherData.data.main.temp - 273.15
            ).toFixed(2)} °C.`}
          </Text>
          <Link to="/notice">
            <Button> Click Here to See more Details</Button>
          </Link>
        </Flex>
      ) : null}
    </Flex>
  );
}

export default home;
