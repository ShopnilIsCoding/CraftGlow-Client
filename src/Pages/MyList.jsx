import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Lottie from "lottie-react";
import loadingAnim from "../Lotties/loading.json";
import { useLoaderData } from "react-router-dom";
import MyItem from "../Components/MyItem";

const MyList = () => {
  const { user, loading } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const data = useLoaderData();
  const [itemData, setItemData] = useState(data);
  const [filter, setFilter] = useState("All");
  useEffect(() => {
    if (data) {
        setIsLoading(false);
    }
}, [data]);
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const filteredItems = itemData.filter((item) => {
    if (filter === "All") {
      return true;
    }
    return item.customization.toLowerCase() === filter.toLowerCase();
  });
  if (loading || isLoading) {
    return (
      <div className="lg:size-96 mx-auto">
        <Lottie animationData={loadingAnim} loop={true} />
      </div>
    );
  }
  
  if (data.length <= 0) {
    return (
      <div>
        
        <p className="text-center text-xl font-semibold py-2 text-primary">
          No items added yet
        </p>
      </div>
    );
  }

  return (
    <div className="">
      {/*filtering */}
      <div className="mb-4 lg:max-w-[50%] flex justify-center items-center mx-auto my-4 lg:my-8 ">
        <label htmlFor="filter" className="mr-2 font-kristi text-xl">
          Filter by customization:
        </label>
        <select
          id="filter"
          value={filter}
          onChange={handleFilterChange}
          className="select select-bordered w-[25%] "
        >
          <option value="All">All</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      {/* filtered items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8 mt-3 lg:mt-6 p-3 lg:p-6 mx-auto">
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
