import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import {
  RiDashboardFill,
  RiMenu2Line,
  RiUserAddFill,
  RiUserFill,
  RiUserSearchFill,
} from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../redux/actions/menu.action";
import MenuItem from "./MenuItem";
import MenuToggle from "./MenuToggle";
import NavHeader from "./NavHeader";

const MainLayout = ({ children, active, title, desc }) => {
  const [menuHide, setMenuHide] = useState();
  const { isMenuHide } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  useEffect(() => {
    setMenuHide(isMenuHide);
  }, []);

  useEffect(() => {
    setMenuHide(isMenuHide);
  }, [isMenuHide]);

  return (
    <Flex maxWidth={"100%"} height={"100%"} overflowX={"hidden"}>
      <NavHeader />
      <Box width={"100%"}>
        <Flex width={"100%"} paddingTop={"3.5em"}>
          <Flex
            width={menuHide ? "3.5em" : "13.5em"}
            height={"100vh"}
            borderRight={"1px"}
            borderRightColor={"#D0D6DC"}
            backgroundColor={"#F6F6F9"}
            flexDirection={"column"}
          >
            <MenuToggle url="#" icon={RiMenu2Line} name="Menu" />
            <MenuItem
              active={active === "dashboard"}
              url="/"
              icon={RiDashboardFill}
              name="Dashboard"
            />
            <MenuItem
              active={active === "users"}
              url="/users"
              icon={RiUserFill}
              name="Users"
            />
            <MenuItem
              active={active === "registration"}
              url="/register"
              icon={RiUserAddFill}
              name="Registration"
            />
            <MenuItem
              active={active === "search"}
              url="/search"
              icon={RiUserSearchFill}
              name="Search"
            />
          </Flex>
          <Flex width={"inherit"} flexDirection={"column"} maxWidth={"inherit"}>
            <Flex
              flexDirection={"column"}
              padding={4}
              borderBottom={"1px"}
              borderBottomStyle={"solid"}
              borderBottomColor={"#D0D6DC"}
            >
              <Text fontSize={"3xl"} fontWeight={"bold"} lineHeight={1.2}>
                {title}
              </Text>
              <Text fontSize={"md"} fontWeight={"bold"} color={"#1B5BA5"}>
                {desc}
              </Text>
            </Flex>
            <Flex padding={4} flexWrap={"nowrap"} overflowX={"auto"}>
              {children}
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};
MainLayout.defaultProps = {
  title: "Title Page Here",
  desc: "Desc Page Here",
};

export default MainLayout;
