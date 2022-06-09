import { Flex, Icon, Link, LinkOverlay, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const MenuItem = (props) => {
  return (
    <NextLink href={props.url} passHref>
      <Link style={{ textDecoration: "none" }}>
        <Flex
          cursor={"pointer"}
          padding={"1em"}
          height={"3.5em"}
          width={"inherit"}
          borderLeft={"3px"}
          borderLeftStyle={"solid"}
          borderLeftColor={props.active ? "#1B5BA5" : "transparent"}
          transition={"all 0.5s"}
          color={props.active ? "#1B5BA5" : "#4E5660"}
          _hover={{
            borderLeft: "3px",
            borderLeftStyle: "solid",
            borderLeftColor: "#1B5BA5",
            background: "#EBEDF0",
            color: "#1B5BA5",
          }}
        >
          <Flex alignItems={"center"} overflow={"hidden"} width={"inherit"}>
            <Icon as={props.icon} color="currentcolor" />
            <Text
              marginLeft={"1em"}
              fontWeight={"bold"}
              color={props.active ? "#1B5BA5" : "#4E5660"}
            >
              {props.name}
            </Text>
          </Flex>
        </Flex>
      </Link>
    </NextLink>
  );
};

export default MenuItem;
