import { Spinner } from "@chakra-ui/react";
import { useMemo } from "react";
import { useQuery } from "react-query";
import MainLayout from "../components/MainLayout";
import Tables from "../components/users/Table";
import { actionUsers } from "../redux/actions/users.action";

export default function Users() {
  const {
    data: users,
    isSuccess,
    isLoading,
    isStale,
    isError,
  } = useQuery("users", actionUsers);

  const data = useMemo(() => users, [users]);

  return (
    <MainLayout active="users" title="Users Data" desc="List of Users Data">
      {isLoading ? <Spinner /> : <Tables data={data} />}
    </MainLayout>
  );
}
