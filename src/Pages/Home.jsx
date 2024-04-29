import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import SingleItem from "../Components/SingleItem";
import Lottie from "lottie-react";
import loadingAnim from "../Lotties/loading.json";
import { useEffect, useState } from "react";
import Categories from "../Components/Categories";
const Home = () => {
    const data=useLoaderData();
    const slicedData=data.slice(0,6)
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (data) {
            setIsLoading(false);
        }
    }, [data]);
   
    
    return (
        <div>
            <Banner></Banner>
            <h1 className="text-5xl font-kristi text-center mt-10">Craft Items</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8 mt-3 lg:mt-6 p-3 lg:p-6">
            {isLoading?<div className="lg:size-96 mx-auto">
                <Lottie animationData={loadingAnim} loop={true} />
            </div>: slicedData.map(item=><SingleItem delete={false} update={false} item={item} key={item._id}></SingleItem>)}

            </div>
            <div className="lg:mb-12">
            <h1 className="text-5xl font-kristi text-center mt-10">Categories</h1>
                <Categories></Categories>
            </div>
        </div>
    );
};

export default Home;