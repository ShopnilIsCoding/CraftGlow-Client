import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import SingleItem from "../Components/SingleItem";

const Home = () => {
    const data=useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <h1 className="text-5xl font-kristi text-center mt-10">Craft Items</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8 mt-3 lg:mt-6 p-3 lg:p-6">
            {data.map(item=><SingleItem delete={false} update={false} item={item} key={item._id}></SingleItem>)}

            </div>
        </div>
    );
};

export default Home;