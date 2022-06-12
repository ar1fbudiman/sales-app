import { Spinner } from "@chakra-ui/react";
import { useMemo } from "react";
import { useQuery } from "react-query";
import MainLayout from "../components/MainLayout";
import { salesColumns } from "../components/sales/Columns";
import Tables from "../components/Table";
import { actionSales } from "../redux/actions/sales.action";

export default function Home() {
  const { data: sales, isLoading } = useQuery("sales", actionSales);

  const data = useMemo(() => sales, [sales]);
  const columns = useMemo(() => salesColumns, []);
  return (
    <MainLayout
      active="dashboard"
      title="Sales Dashboard"
      desc="List of Sales Data"
    >
      {isLoading ? <Spinner /> : <Tables data={data} columns={columns} />}
    </MainLayout>
  );
}
