import { useLoaderData } from "react-router-dom";
import Lottie from "lottie-react";
import loadingAnim from "../Lotties/loading.json";
import { useEffect, useState } from "react";

const ItemDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const {
    image,
    rating,
    status,
    itemName,
    price,
    userName,
    _id,
    userPhoto,
    time,
    description,
    category,
    customization,
  } = data;
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
	);
}
  return (
    <div>
      <div
        id="container"
        className=" shadow-rose-100 flex flex-col-reverse lg:flex-row justify-between lg:h-[350px] lg:w-[700px]"
      >
        <div className="product-details lg:w-1/2">
          <div className="size-14 mx-auto">
            <img
              className="rounded-full"
              src={userPhoto ? userPhoto : "/profile.png"}
              alt=""
            />
          </div>
          <h1>{itemName}</h1>
          <p className="information">{description}</p>
          <button className="btn cursor-not-allowed bg-info text-white font-bold font-serif text-xl flex w-full justify-center mt-6 lg:mt-12 border-0">
            {price}
          </button>
        </div>

        <div className="product-image w-full h-[350px] lg:w-1/2">
          <img src={image} alt="" />

          <div className="info text-info">
            <h2> Detailed Info</h2>
            <ul className="">
              <li className="text-white">
                <strong className="text-green-400"> By : </strong>
                {userName}{" "}
              </li>
              <li className="text-white">
                <strong className="text-green-400"> Category : </strong>
                {category}
              </li>
              <li className="text-white">
                <strong className="text-green-400"> Customization : </strong>
                {customization}
              </li>
              <li className="text-white">
                <strong className="text-green-400"> Price : </strong>
                {price}
              </li>
              <li className="text-white">
                <strong className="text-green-400"> Rating : </strong>
                {rating}
              </li>
              <li className="text-white">
                <strong className="text-green-400"> status : </strong>
                {status}
              </li>
              <li className="text-white">
                <strong className="text-green-400"> Time : </strong>
                {time}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
