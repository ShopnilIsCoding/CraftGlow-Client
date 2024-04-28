import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Lottie from "lottie-react";
import loadingAnim from "../Lotties/loading.json"
import { useLoaderData } from "react-router-dom";
import MyItem from "../Components/MyItem";
const MyList = () => {
    const {user,loading}=useContext(AuthContext);
    const data=useLoaderData();
    const [itemData,setItemData]=useState(data);
    if(loading)
    {
       return <div className="lg:size-96 mx-auto"><Lottie animationData={loadingAnim} loop={true}/></div>
    }
    if(itemData.length <= 0)
    {
        return <p className="text-center text-xl font-semibold py-2 text-primary">No items added yet</p>
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8 mt-3 lg:mt-6 p-3 lg:p-6">
            {itemData.map(item=><MyItem itemData={itemData} setItemData={setItemData} key={item._id} item={item} Delete={true} Update={true}></MyItem>)}
        </div>
    );
};

export default MyList;