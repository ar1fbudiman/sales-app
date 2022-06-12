import { useQuery } from "react-query";
import MainLayout from "../components/MainLayout";
import { actionUsers } from "../redux/actions/users.action";

export default function Users() {
  const { data: users } = useQuery("users", actionUsers);
  return (
    <MainLayout active="users" title="Users Data" desc="List of Users Data">
      <h1>Users Disini</h1>
    </MainLayout>
  );
}
