import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from './../components/shared/Footer';

const Root = () => {
  const location = useLocation()
  console.log(location);
  return (
    <main className="font-inter">
      <Navbar />
      <Outlet />
      <Footer/>
    </main>
  );
};

export default Root;
