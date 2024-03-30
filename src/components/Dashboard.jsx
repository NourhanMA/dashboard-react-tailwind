import Sidebar from "./Sidebar";
import UsersTable from "./UsersTable";

const Dashboard = () => {
  const username = localStorage.getItem("username");
  return (
    <>
      <Sidebar></Sidebar>
      <div className=" w-full md:w-3/4 min-h-screen">
        <p className=" text-4xl text-left font-semibold mb-12 ml-8 pt-12">
          Welcome {username}
        </p>
        <UsersTable />
      </div>
    </>
  );
};

export default Dashboard;
