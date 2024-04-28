import { useLoaderData } from "react-router-dom";


const ItemDetails = () => {
    const data=useLoaderData();
    console.log(data);
    return (
        <div>
            {data.image}
        </div>
    );
};

export default ItemDetails;