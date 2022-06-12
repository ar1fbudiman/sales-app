import {
  Box,
  Button,
  Flex,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { useMutation } from "react-query";
import { actionDelete } from "../../redux/actions/search.action";

const ModalConfirm = (props) => {
  const { id, name, email } = props;
  const router = useRouter();
  const toast = useToast();
  const mutation = useMutation(actionDelete, {
    onSuccess: async () => {
      toast({
        title: `User deleted`,
        variant: "left-accent",
        status: "success",
        isClosable: true,
        position: "top-right",
      });
      return await router.push("/users");
    },
  });

  const handleDelete = () => {
    mutation.mutate(id, name, email);
  };
  return (
    <>
      <Modal
        finalFocusRef={props.finalRef}
        isOpen={props.isOpen}
        onClose={props.onClose}
        size={"lg"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete user</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Flex
                width={"100px"}
                height={"100px"}
                background={"#F6F6F9"}
                borderRadius={"50%"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Icon as={RiDeleteBin2Fill} color={"black"} w={12} h={12} />
              </Flex>
              <Text marginTop={1} fontSize={"xl"} fontWeight={"bold"}>
                Are you sure you want this user ?
              </Text>
              <Text marginTop={1} fontSize={"sm"}>
                This action will delete: {props.name} from database
              </Text>
            </Flex>
          </ModalBody>

          <ModalFooter justifyContent={"center"}>
            <Button
              variant="ghost"
              color={"#1B5BA5"}
              border={"1px solid rgb(239, 247, 255)"}
              mr={3}
              onClick={props.onClose}
            >
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={() => handleDelete()}>
              Delete User
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalConfirm;
