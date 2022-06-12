import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Text,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import ModalConfirm from "./ModalConfirm";

const UserDetail = (props) => {
  const getKeys = Object.keys(props.data);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef(null);
  return (
    <>
      <Drawer
        isOpen={props.isOpen}
        placement="right"
        onClose={props.onClose}
        finalFocusRef={props.btnRef}
        size={"sm"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottom={"1px solid #D0D6DC"}>
            <Text fontSize={"2xl"}>User Details</Text>
            <Text fontSize={"sm"} fontWeight={"normal"}>
              This is inquiry about user with email:
            </Text>
            <Text
              fontSize={"sm"}
              fontWeight={"normal"}
              textTransform={"lowercase"}
            >
              {props.data.email}.
            </Text>
          </DrawerHeader>

          <DrawerBody>
            {getKeys.map((item, index) => {
              const fieldName = item.replace(/_/g, " ");
              return (
                <>
                  <Flex key={index.toString}>
                    <Text width={"40%"} textTransform={"capitalize"}>
                      {fieldName}
                    </Text>
                    <Text width={"10%"}>:</Text>
                    <Text width={"50%"} overflowWrap={"break-word"}>
                      {props.data[item]}
                    </Text>
                  </Flex>
                </>
              );
            })}
          </DrawerBody>

          <DrawerFooter
            borderTop={"1px solid #D0D6DC"}
            justifyContent={"space-between"}
          >
            <Button variant="outline" mr={3} onClick={props.onClose}>
              Cancel
            </Button>
            <Button colorScheme="red" onClick={onOpen}>
              Delete User
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <ModalConfirm
        id={props.data.id}
        name={props.data.name}
        email={props.data.email}
        isOpen={isOpen}
        onClose={onClose}
        finalRef={finalRef}
      />
    </>
  );
};

export default UserDetail;
