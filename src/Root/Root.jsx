import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Root = () => {
    return (
        <div>
            <div className="glass shadow-lg sticky top-0 z-50">
            <Navbar></Navbar>
            </div>
            <div className="container mx-auto">
            <div className="w-[97%] lg:w-auto">
            <Outlet></Outlet>
            </div>
            
            </div>
            <div className="bg-base-200">
            <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Root;