import React from "react";
import {
  Input,
  Select,
  Text,
  FormControl,
  FormLabel,
  Container,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Routes, Route, useParams } from "react-router-dom";
// Form Components
import LocationForm from "../../components/locationForm/locationForm";
import UserForm from "../../components/userForm/userForm";
// API CALL FORM

function userInputForm(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Container
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      my="25"
      mb="100"
    >
      <Text color="blue.800" fontWeight="semibold" mb="8" fontSize="3xl">
        User Form
      </Text>
      <UserForm {...props} />
    </Container>
  );
}

export default userInputForm;
