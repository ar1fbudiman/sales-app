import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Icon,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiErrorWarningFill, RiInformationFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../components/MainLayout";
import MyToast from "../components/MyToast";
import {
  actionCreate,
  actionReset,
} from "../redux/actions/registration.action";

const Registration = () => {
  const dispatch = useDispatch();
  const { registrationSuccess, registrationFailed, registrationLoading } =
    useSelector((state) => state.registration);
  const toast = useToast();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    if (registrationSuccess) {
      toast({
        title: `User created`,
        variant: "left-accent",
        status: "success",
        isClosable: true,
        position: "top-right",
      });
      router.push("/users");
    }

    if (registrationFailed) {
      toast({
        title: `Email already exists`,
        variant: "left-accent",
        status: "error",
        isClosable: true,
        position: "top-right",
      });
    }

    return () => dispatch(actionReset());
  }, [dispatch, router, toast, registrationFailed, registrationSuccess]);

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const isErrorName = name === "";
  const isErrorEmail = !regex.test(email);

  const handleSubmit = () => {
    const data = {
      name: name,
      email: email,
    };
    dispatch(actionCreate(data));
  };
  return (
    <MainLayout
      active="registration"
      title="User Registration"
      desc="Add new User"
    >
      <Flex flexDirection={"column"} width={"30%"}>
        <FormControl isInvalid={isErrorName}>
          <FormLabel htmlFor="name" color={isErrorName ? "#E53E3E" : "#000"}>
            Name
          </FormLabel>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {isErrorName ? (
            <FormErrorMessage>
              <Icon as={RiErrorWarningFill} color="currentcolor" /> &nbsp;Please
              provided name
            </FormErrorMessage>
          ) : null}
        </FormControl>
        <FormControl isInvalid={isErrorEmail} marginTop={4}>
          <FormLabel htmlFor="email" color={isErrorEmail ? "#E53E3E" : "#000"}>
            Email
          </FormLabel>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {isErrorEmail ? (
            <FormErrorMessage>
              <Icon as={RiErrorWarningFill} color="currentcolor" /> &nbsp;Please
              provided email
            </FormErrorMessage>
          ) : null}
        </FormControl>
        <Button
          alignSelf={"flex-end"}
          width={"50%"}
          marginTop={4}
          colorScheme="teal"
          size="md"
          background={"#1B5BA5"}
          isDisabled={isErrorEmail || isErrorName}
          onClick={() => handleSubmit()}
        >
          Submit
        </Button>
      </Flex>
    </MainLayout>
  );
};

export default Registration;
