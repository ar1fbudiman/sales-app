import { Flex } from "@chakra-ui/react";

const MenuHide = ({ children }) => {
  return (
    <Flex
      width={"3.5em"}
      height={"100vh"}
      borderRight={"1px"}
      borderRightColor={"#D0D6DC"}
      backgroundColor={"#F6F6F9"}
      flexDirection={"column"}
    >
      {children}
    </Flex>
  );
};

export default MenuHide;
