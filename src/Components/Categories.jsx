import { useEffect, useState } from "react";
import SubCategory from "./SubCategory";

const Categories = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://craftglow.vercel.app/item/categories")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8 my-3 lg:my-6 p-3 lg:p-6  rounded-xl shadow-xl bg-base-100">

        {data.map(item=><SubCategory key={item._id} item={item}></SubCategory>)}
    </div>
  );
};

export default Categories;
