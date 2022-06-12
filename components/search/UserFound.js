import { Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";
import UserDetail from "./UserDetail";

const UserFound = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <Flex
      minHeight={"15em"}
      background={"white"}
      border={1}
      borderStyle={"solid"}
      borderColor={"#D0D6DC"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      marginTop={4}
      borderRadius={5}
    >
      <Text fontSize={"2xl"} fontWeight={"bold"}>
        {data.name}
      </Text>
      <Text fontSize={"sm"} color={"blackAlpha.500"}>
        {data.email}
      </Text>
      <Box
        paddingX={10}
        paddingY={3}
        marginTop={2}
        borderTop={1}
        borderTopStyle={"solid"}
        borderTopColor={"#D0D6DC"}
      >
        <Button
          alignSelf={"flex-end"}
          colorScheme="teal"
          size="md"
          background={"#1B5BA5"}
          ref={btnRef}
          onClick={onOpen}
        >
          View User Profile
        </Button>
        <UserDetail
          data={data}
          isOpen={isOpen}
          onClose={onClose}
          btnRef={btnRef}
        />
      </Box>
    </Flex>
  );
};

export default UserFound;
