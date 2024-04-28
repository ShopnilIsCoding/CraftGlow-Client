import React, { useState, useRef, useEffect } from "react";
import { CiStar } from "react-icons/ci";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { Link } from "react-router-dom";

const SingleItem = ({ item }) => {
    const { image, rating, status, itemName, price, userName, _id, userPhoto,time } = item;
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

    return (
        <div>
            <div className="">
                <div onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}>
                    <a href="" className="card">
                        <img
                            src={image}
                            className="card__image h-[266px] lg:h-[366px] md:h-[300px] w-10/12 rounded-xl mx-auto"
                            alt=""
                        />
                        <div className="card__overlay bg-base-100 rounded-t-xl" 
                               >
                            <div
                                className="card__header text-primary font-kristi "
                               
                                ref={hoverableRef}
                            >
                                <img className="card__thumb" src={userPhoto} alt="" />
                                <div className="card__header-text">
                                    <h3 className="card__title font-bold">By {userName}</h3>
                                    <span className="card__status text-secondary font-serif font-extrabold">{itemName}</span>
                                </div>
                            </div>
                            <p className="card__description">
                            <div className="flex justify-between items-center">
                    <p className="font-semibold font-serif">{status}</p>
                    <p className="font-medium flex justify-center items-center gap-2 font-serif"><HiMiniCurrencyDollar className="text-xl " /> {price}</p>
                    <p className="font-medium flex justify-center items-center gap-2 font-serif">{rating}<CiStar className="text-yellow-500 text-xl" /></p>
                
                </div>
                <Link to={`/details/${_id}`} className=" mt-2 flex justify-between w-full font-serif font-semibold"> <p>Time : {time}</p> <button className="text-3xl"><BsFillArrowUpRightCircleFill /></button></Link>
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SingleItem;
