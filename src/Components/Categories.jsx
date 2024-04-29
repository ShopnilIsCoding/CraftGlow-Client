import { useEffect, useState } from "react";

const Categories = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://localhost:3000/categories')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    console.log(data);
    return (
        <div>
            
        </div>
    );
};

export default Categories;