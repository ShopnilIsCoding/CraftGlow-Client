import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Root = () => {
    return (
        <div>
            <div className="glass shadow-lg sticky top-0 z-50">
            <Navbar></Navbar>
            </div>
            <div className="container mx-auto">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;