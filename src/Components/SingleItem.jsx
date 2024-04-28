import React, { useState, useRef, useEffect } from "react";
import { CiStar } from "react-icons/ci";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";

const SingleItem = ({ item, Delete, Update,itemData,setItemData }) => {
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
  } = item;
  const [hovered, setHovered] = useState(true);
  const hoverableRef = useRef(null);

  useEffect(() => {
    const hoverableElement = hoverableRef.current;
    if (hoverableElement) {
      if (hovered) {
        hoverableElement.classList.add("glass");
      } else {
        hoverableElement.classList.remove("glass");
      }
    }
  }, [hovered]);

  const handleMouseEnter = () => {
    setHovered(false);
  };

  const handleMouseLeave = () => {
    setHovered(true);
  };

  const handleDelete = () => {
    fetch(`http://localhost:3000/delete/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((delData) => {
        const remainingItemData=itemData.filter(filterData => filterData._id !==item._id)
        setItemData(remainingItemData);
      });
  };
  return (
    <div>
      <div className="">
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div  className="card">
            <img
              src={image}
              className="card__image h-[266px] lg:h-[366px] md:h-[300px] w-10/12 rounded-xl mx-auto"
              alt=""
            />
            <div className="card__overlay bg-base-100 rounded-t-xl">
              <div
                className="card__header text-primary font-kristi "
                ref={hoverableRef}
              >
                <img className="card__thumb" src={userPhoto} alt="" />
                <div className="w-full space-y-1">
                  <h3 className=" font-bold flex justify-between items-center">
                    By {userName}{" "}
                    {Delete && (
                      <button onClick={handleDelete} className="p-2 border rounded-full border-red-600">
                        <RiDeleteBin6Fill className="text-red-600 text-2xl" />
                      </button>
                    )}
                  </h3>
                  <span className=" text-secondary font-serif font-extrabold flex justify-between items-center">
                    {itemName}{" "}
                    {Update && (
                      <button className="p-2 border rounded-full border-green-600">
                        <MdOutlineEdit className=" text-green-600 text-2xl" />
                      </button>
                    )}
                  </span>
                </div>
              </div>
              <div className="card__description">
                <div className="flex justify-between items-center">
                  <p className="font-semibold font-serif">{status}</p>
                  <p className="font-medium flex justify-center items-center gap-2 font-serif">
                    <HiMiniCurrencyDollar className="text-xl " /> {price}
                  </p>
                  <p className="font-medium flex justify-center items-center gap-2 font-serif">
                    {rating}
                    <CiStar className="text-yellow-500 text-xl" />
                  </p>
                </div>
                <div
                  
                  className=" mt-2 flex justify-between w-full font-serif font-semibold"
                >
                  {" "}
                  <p>Time : {time}</p>{" "}
                  <Link to={`/details/${_id}`} className="text-3xl">
                    <BsFillArrowUpRightCircleFill />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
