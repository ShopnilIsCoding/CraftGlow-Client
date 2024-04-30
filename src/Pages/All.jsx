import { useLoaderData } from "react-router-dom";
import SingleItem from "../Components/SingleItem";
import Lottie from "lottie-react";
import loadingAnim from "../Lotties/loading.json";
import { useEffect, useState } from "react";
import AllSingleItem from "../Components/AllSingleItem";

const All = () => {
    const data=useLoaderData();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (data) {
            setIsLoading(false);
        }
    }, [data]);
    if (isLoading) {
        return (
            <div className="lg:size-96 mx-auto">
                <Lottie animationData={loadingAnim} loop={true} />
            </div>
        );
    }
    return (
        <div>
            <div className="overflow-x-scroll">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Creator</th>
        <th>Product</th>
        <th>Price</th>
        <th>Status</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        {data.map(item=><AllSingleItem key={item._id} item={item}></AllSingleItem>)}
      </tbody>
    
  </table>
</div>
        </div>
    );
};

export default All;