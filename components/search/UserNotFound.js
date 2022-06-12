import { Flex, Text } from "@chakra-ui/react";

const UserNotFound = () => {
  return (
    <Flex
      minHeight={"15em"}
      background={"gray.100"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      marginTop={4}
      borderRadius={5}
    >
      <Text fontSize={"2xl"} fontWeight={"bold"}>
        No result was found
      </Text>
      <Text fontSize={"sm"} color={"blackAlpha.500"}>
        Please try again with different email
      </Text>
    </Flex>
  );
};

export default UserNotFound;
