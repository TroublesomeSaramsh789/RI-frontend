import React from "react";
import {
  Text,
  Input,
  Select,
  FormControl,
  FormLabel,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import districtReturn from "../locationForm/districtReturn";
import PROVINCE from "../../api/province";

function userForm(props) {
  let navigate = useNavigate();
  const [proviceSelected, setSelectedProvice] = React.useState("");
  const [districtSelected, setSelectedDistrict] = React.useState("");
  const [districtArray, setdistrictArray] = React.useState([]);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    props.formHandlers.user(data);
    console.log(data.user);
    navigate("/userForm/dynamic-form", { replace: true });
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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isRequired marginY="2">
          <FormLabel>Name:</FormLabel>
          <Input
            placeholder="Youre Name"
            {...register("name", { required: true })}
          />
          {errors.name && "Name is required"}
        </FormControl>
        <FormControl isRequired marginY="2">
          <FormLabel>Email:</FormLabel>
          <Input
            placeholder="Youre Email"
            {...register("email", { required: true })}
          />
          {errors.email && "Email is required"}
        </FormControl>
        <FormControl isRequired marginY="2">
          <FormLabel>Age:</FormLabel>
          <Input
            placeholder="Youre Age"
            type="number"
            {...register("age", { required: true })}
          />
          {errors.age && "Age is required"}
        </FormControl>

        <FormControl isRequired marginY="2">
          <FormLabel>Gender:</FormLabel>
          <Select
            {...register("gender", { required: true })}
            placeholder="Select One"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Select>
          {errors.gender && "Gender is required"}
        </FormControl>
        <FormControl isRequired marginY="2">
          <FormLabel>Province:</FormLabel>
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
        <FormControl isRequired marginY="2">
          <FormLabel>District:</FormLabel>
          <Select
            {...register("district", { required: true })}
            placeholder="Select District"
            onChange={(e) => {
              return setSelectedDistrict(e.target.value);
            }}
          >
            {districtArray}
          </Select>
          <Text color="gray.400">Select Province First</Text>
          {errors.district && "District is required"}
        </FormControl>

        <Button
          backgroundColor="blue.800"
          color="white"
          width="100%"
          type="submit"
          fontSize="xl"
        >
          submit
        </Button>
      </form>
    </div>
  );
}

export default userForm;
