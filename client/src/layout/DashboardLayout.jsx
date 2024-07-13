import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";

const DashboardLayout = () => {
  return (
    <main className="min-h-screen flex mx-auto font-inter">
      <Sidebar />
      <div className="min-w-[1080px] max-w-[1520px] min-h-screen max-auto">
        <Outlet />
      </div>
    </main>
  );
};

export default DashboardLayout;
