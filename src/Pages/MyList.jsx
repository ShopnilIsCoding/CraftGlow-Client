import React, { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Lottie from "lottie-react";
import loadingAnim from "../Lotties/loading.json";
import { useLoaderData } from "react-router-dom";
import MyItem from "../Components/MyItem";

const MyList = () => {
    const { user, loading } = useContext(AuthContext);
    const data = useLoaderData();
    const [itemData, setItemData] = useState(data);
    const [filter, setFilter] = useState("All");
    
    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };
    const filteredItems = itemData.filter((item) => {
        if (filter === "All") {
            return true; 
        }
        return item.customization.toLowerCase() === filter.toLowerCase();
    });
    if (loading) {
        return (
            <div className="lg:size-96 mx-auto">
                <Lottie animationData={loadingAnim} loop={true} />
            </div>
        );
    }
    console.log(filteredItems)
    if (filteredItems.length <= 0) {
        return (
            <div>
                <div className="mb-4 w-full ">
                <label htmlFor="filter" className="mr-2">
                    Filter by customization:
                </label>
                <select
                    id="filter"
                    value={filter}
                    onChange={handleFilterChange}
                    className="border border-gray-300 p-2"
                >
                    <option value="All">All</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            <p className="text-center text-xl font-semibold py-2 text-primary">
                No items added yet
            </p>
            </div>
        );
    }

    return (
        <div>
            {/*filtering */}
            <div className="mb-4">
                <label htmlFor="filter" className="mr-2">
                    Filter by customization:
                </label>
                <select
                    id="filter"
                    value={filter}
                    onChange={handleFilterChange}
                    className="border border-gray-300 p-2"
                >
                    <option value="All">All</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>

            {/* filtered items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8 mt-3 lg:mt-6 p-3 lg:p-6">
                {filteredItems.map((item) => (
                    <MyItem
                        itemData={itemData}
                        setItemData={setItemData}
                        key={item._id}
                        item={item}
                        Delete={true}
                        Update={true}
                    />
                ))}
            </div>
        </div>
    );
};

export default MyList;
