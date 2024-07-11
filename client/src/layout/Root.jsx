import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from './../components/shared/Footer';

const Root = () => {
  return (
    <main className="font-inter">
      <Navbar />
      <Outlet />
      <Footer/>
    </main>
  );
};

export default Root;
