import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

const Root = () => {
  return (
    <main className="font-inter">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default Root;
