
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import Error from "../Lotties/404.json"
const NotFound = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen ">
          
      <div className="max-w-md text-center">
        <div className="flex justify-center"><Lottie animationData={Error} loop={true}/></div>
        <p className="text-xl text-red-600 mb-8">Oops! Page not found.</p>
        <p className="text-red-600 mb-8">The page you are looking for might have been removed or does not exist.</p>
        <Link to={'/'}><button className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Go to Home
        </button></Link>
      </div>
    </div>
        </div>
    );
};

export default NotFound;