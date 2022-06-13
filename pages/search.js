import {
  Flex,
  InputGroup,
  InputLeftElement,
  Icon,
  Input,
  InputRightElement,
  Button,
  Box,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { useQuery } from "react-query";
import MainLayout from "../components/MainLayout";
import UserFound from "../components/search/UserFound";
import UserNotFound from "../components/search/UserNotFound";
import { actionFindUser } from "../redux/actions/search.action";
import { FaTimesCircle } from "react-icons/fa";
import { actionUsers } from "../redux/actions/users.action";
const Search = () => {
  const [id, setId] = useState(null);
  const [search, setSearch] = useState(null);
  const { data: users } = useQuery("users", actionUsers);
  const { data: userDetail, refetch } = useQuery(
    ["userDetail", id],
    () => actionFindUser(id),
    {
      staleTime: 3000,
      refetchInterval: 3000,
      enabled: false, // disable for automaticly running
    }
  );

  useEffect(() => {
    const resultSearch = handleSearch(search);
    if (resultSearch.id_filtered !== null) {
      setId(resultSearch.id_filtered); // if data found set state id with data user
      refetch();
    } else {
      setId(undefined); // if data not found set state id with falsy
      refetch();
    }
  }, [search, id]);

  const handleSearch = (input) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (regex.test(input)) {
      const getArrData = users;
      const filtered = getArrData.filter((item) => {
        return item.email === input;
      });
      if (filtered[0] !== undefined) {
        return { id_filtered: filtered[0]["id"] };
      } else {
        return { id_filtered: null };
      }
    } else {
      return { id_filtered: null };
    }
  };

  const handleResetInput = () => {
    setSearch("");
  };

  return (
    <MainLayout active="search" title="Search User" desc="Search existing user">
      <Flex width={"50%"} flexDirection={"column"}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Icon as={RiSearch2Line} color="gray.300" />
          </InputLeftElement>
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="email"
            placeholder="Search by email"
          />
          {search ? (
            <InputRightElement>
              <Box
                cursor={"pointer"}
                onClick={() => handleResetInput()}
                _hover={{
                  color: "red",
                }}
              >
                <Icon as={FaTimesCircle} color={"currentcolor"} />
              </Box>
            </InputRightElement>
          ) : null}
        </InputGroup>
        {userDetail?.data.data?.name ? (
          <UserFound data={userDetail.data.data} />
        ) : (
          <UserNotFound />
        )}
      </Flex>
    </MainLayout>
  );
};

export default Search;
