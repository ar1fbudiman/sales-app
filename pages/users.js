import { Spinner } from "@chakra-ui/react";
import { useMemo } from "react";
import { useQuery } from "react-query";
import MainLayout from "../components/MainLayout";
import Tables from "../components/Table";
import { usersColumns } from "../components/users/Columns";
import { actionUsers } from "../redux/actions/users.action";

export default function Users() {
  const { data: users, isLoading } = useQuery("users", actionUsers);

  const data = useMemo(() => users, [users]);
  const columns = useMemo(() => usersColumns, []);

  return (
    <MainLayout active="users" title="Users Data" desc="List of Users Data">
      {isLoading ? <Spinner /> : <Tables data={data} columns={columns} />}
    </MainLayout>
  );
}
