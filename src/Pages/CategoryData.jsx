import React, { useEffect, useState } from 'react';
import Lottie from "lottie-react";
import loadingAnim from "../Lotties/loading.json";
import { useLoaderData } from 'react-router-dom';
import SingleItem from '../Components/SingleItem';
const CategoryData = () => {
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
        );}
        if(data.length<=0)
        {
            return (
                <div>
                  
                  <p className="text-center text-xl font-semibold py-2 text-primary">
                   Sorry! No items Found
                  </p>
                </div>
              );
        }
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8 mt-3 lg:mt-6 p-3 lg:p-6">
            {data.map(item=><SingleItem key={item._id} delete={false} update={false} item={item}></SingleItem>)}
        </div>
        </>
    );
};

export default CategoryData;