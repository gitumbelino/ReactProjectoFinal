import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar.jsx";
import './LayoutMaster.css'
import Footer from "../footer/footer.jsx";


export default function LayoutMaster() {
  return (<div className="background-master">

    <Navbar />
    <Outlet/>
    <Footer />

  </div>)
}