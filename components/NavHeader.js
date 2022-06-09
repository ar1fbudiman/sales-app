import { Flex, LinkOverlay, Text } from "@chakra-ui/react";

const NavHeader = () => {
  return (
    <Flex
      borderBottom={"1px"}
      borderStyle={"solid"}
      borderBottomColor={"#D0D6DC"}
      background={"#FFF"}
      height={"3.5em"}
      width={"100%"}
      position={"fixed"}
      top={0}
      zIndex={3}
    >
      <Flex
        width={"80%"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text
          fontSize={"1.50rem"}
          margin={0}
          padding={0}
          fontWeight={400}
          color={"#000"}
          marginLeft={"1em"}
        >
          <LinkOverlay href="/">delman.io</LinkOverlay>
        </Text>
      </Flex>
    </Flex>
  );
};

export default NavHeader;
