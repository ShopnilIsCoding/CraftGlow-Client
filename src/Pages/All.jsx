import { useLoaderData } from "react-router-dom";
import SingleItem from "../Components/SingleItem";


const All = () => {
    const data=useLoaderData();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8 mt-3 lg:mt-6 p-3 lg:p-6">
            {data.map(item=><SingleItem item={item}></SingleItem>)}
        </div>
    );
};

export default All;