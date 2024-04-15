import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <>
      <Sidebar></Sidebar>
      <div className=" w-full md:w-3/4 min-h-screen">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
