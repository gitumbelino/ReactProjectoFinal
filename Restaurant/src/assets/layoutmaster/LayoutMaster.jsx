import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar.jsx";
import './LayoutMaster.css'
import Footer from "../footer/footer.jsx";


export default function LayoutMaster() {
  return (<>

    <Navbar />
    
    <Footer />

  </>)
}