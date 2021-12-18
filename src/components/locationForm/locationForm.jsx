import React from "react";
import {
  Input,
  Select,
  FormControl,
  FormLabel,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

//district's Returning Function
import districtReturn from "./districtReturn";
import PROVINCE from "../../api/province";
function LocationForm(props) {
  const [proviceSelected, setSelectedProvice] = React.useState("");
  const [districtSelected, setSelectedDistrict] = React.useState("");
  const [districtArray, setdistrictArray] = React.useState([]);
  //Form Handling
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    props.formHandlers.location(data);
  };

  // Lifecycle for Province
  React.useEffect(() => {
    setdistrictArray(districtReturn(proviceSelected));
  }, [proviceSelected]);

  //DROPDOWN PROVINCE
  const provinceName = PROVINCE.map((item) => {
    return (
      <option value={item.value} key={item.name}>
        {item.name}
      </option>
    );
  });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex marginY="3">
          <FormControl marginX="2">
            <Select
              {...register("province", { required: true })}
              placeholder="Select Province"
              onChange={(e) => {
                return setSelectedProvice(e.target.value);
              }}
            >
              {provinceName}
            </Select>
            {errors.province && "Province is required"}
          </FormControl>
          <FormControl marginX="2">
            <Select
              {...register("district", { required: true })}
              placeholder="Select District"
              onChange={(e) => {
                return setSelectedDistrict(e.target.value);
              }}
            >
              {districtArray}
            </Select>
            {errors.district && "District is required"}
          </FormControl>
          <FormControl>
            <Button
              color="white"
              fontWeight="bold"
              background="blue.800"
              m="auto"
              type="submit"
            >
              submit
            </Button>
          </FormControl>
        </Flex>
      </form>
    </>
  );
}

export default LocationForm;
