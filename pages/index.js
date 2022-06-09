import MainLayout from "../components/MainLayout";

export default function Home() {
  return (
    <MainLayout
      active="dashboard"
      title="Sales Dashboard"
      desc="List of Sales Data"
    >
      <div>
        <h1>Hallo</h1>
      </div>
    </MainLayout>
  );
}
