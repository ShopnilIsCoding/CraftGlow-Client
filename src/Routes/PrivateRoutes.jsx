import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import loadingAnim from "../Lotties/loading.json"
import { AuthContext } from "../Providers/AuthProvider";
const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location = useLocation();
    if(loading)
    {
        return <div className="lg:size-96 md:size-96 mx-auto"><Lottie animationData={loadingAnim} loop={true}/></div>
    }
    if(user)
    return children;
    return (
        <Navigate state={location.pathname} to={'/login'}>
            
        </Navigate>
    );
};

export default PrivateRoutes;