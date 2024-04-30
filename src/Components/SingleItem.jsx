import React, { useState, useRef, useEffect } from "react";
import { CiStar } from "react-icons/ci";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";
import Swal from "sweetalert2";
import { IoCloseSharp } from "react-icons/io5";
import { GrUpdate } from "react-icons/gr";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleItem = ({ item, Delete, Update, itemData, setItemData }) => {
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
    category,
    description,
    customization
  } = item;
  const [hovered, setHovered] = useState(true);
  const hoverableRef = useRef(null);
  const closeRef = useRef(null);

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
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://craftglow.vercel.app/delete/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((delData) => {
            const remainingItemData = itemData.filter(
              (filterData) => filterData._id !== item._id
            );
            setItemData(remainingItemData);
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const handleUpdate = (e,_id) => {
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(_id)
    fetch(`https://craftglow.vercel.app/update/${_id}`,{
        method:'PATCH',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(upData=>
    {
        Swal.fire({
            title: "Data has been updated!",
            
            icon: "success",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ok"
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          });
    })
  };
  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <div className="">
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="card">
            <img
              src={image}
              className="card__image h-[266px] lg:h-[366px] md:h-[300px] w-full rounded-xl mx-auto"
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
                      <button
                        onClick={handleDelete}
                        className="p-2 border rounded-full border-red-600"
                      >
                        <RiDeleteBin6Fill className="text-red-600 text-2xl" />
                      </button>
                    )}
                  </h3>
                  <span className=" text-secondary font-serif font-extrabold flex justify-between items-center">
                    {itemName}{" "}
                    {Update && (
                      <button
                        onClick={() => {
                          document.getElementById(`my-modal-${_id}`).showModal();
                          
                        }}
                        className="p-2 border rounded-full border-green-600"
                      >
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
                <div className=" mt-2 flex justify-between w-full font-serif font-semibold">
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
      <dialog id={`my-modal-${_id}`} className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box">
          <div className="modal-action">
            <form className="card-body w-full" method="dialog" onSubmit={(e)=>handleUpdate(e,item._id)}>
              {/* Row */}
              <div className="flex flex-col lg:flex-row md:flex-row gap-3">
                <div className="form-control lg:w-1/2">
                  <label className="label">
                    <span className="label-text font-kristi">Image</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Item Image URL"
                    name="image"
                    className="input input-bordered font-kristi"
                    
                  />
                </div>
                <div className="form-control lg:w-1/2">
                  <label className="label">
                    <span className="label-text font-kristi">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Item Name"
                    name="itemName"
                    className="input input-bordered font-kristi"
                    
                  />
                </div>
              </div>
              {/* Row */}
              <div className="flex flex-col lg:flex-row md:flex-row gap-3">
                <div className="form-control lg:w-1/2">
                  <label className="label">
                    <span className="label-text font-kristi">Category</span>
                  </label>
                  <select
                    name="category"
                    className="select select-bordered w-full"
                   
                  >
                    <option>Card Making</option>
                    <option>Scrapbooking</option>
                    <option>Paper Quilling & origami</option>
                    <option>Glass Painting</option>
                    <option>Lampworking</option>
                    <option>Glass Dying & Staining</option>
                  </select>
                </div>
                <div className="form-control lg:w-1/2">
                  <label className="label">
                    <span className="label-text font-kristi">Price</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Item Price"
                    name="price"
                    className="input input-bordered font-kristi"
                    
                  />
                </div>
              </div>
              <div className="form-control lg:w-full">
                <label className="label">
                  <span className="label-text font-kristi">Description</span>
                </label>
                <input
                  type="text"
                  placeholder="Short Description"
                  name="description"
                  className="input input-bordered font-kristi"
                  
                />
              </div>
              {/* Row */}
              <div className="flex flex-col lg:flex-row md:flex-row gap-3">
                <div className="form-control lg:w-1/2">
                  <label className="label">
                    <span className="label-text font-kristi">Rating</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Item Rating"
                    name="rating"
                    className="input input-bordered font-kristi"
                   
                  />
                </div>
                <div className="form-control lg:w-1/2">
                  <label className="label">
                    <span className="label-text font-kristi">
                      Customization
                    </span>
                  </label>
                  <select
                    name="customization"
                    className="select select-bordered w-full"
                   
                  >
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
              {/* Row */}
              <div className="flex flex-col lg:flex-row md:flex-row gap-3">
                <div className="form-control lg:w-1/2">
                  <label className="label">
                    <span className="label-text font-kristi">Time</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Processing Time"
                    name="time"
                    className="input input-bordered font-kristi"
                    
                  />
                </div>
                <div className="form-control lg:w-1/2">
                  <label className="label">
                    <span className="label-text font-kristi">Stock Status</span>
                  </label>
                  <select
                    name="status"
                    className="select select-bordered w-full"
                    
                  >
                    <option>In Stock</option>
                    <option>Made By Order</option>
                  </select>
                </div>
              </div>

              <div className="form-control mt-2">
                <button
                  type="submit"
                  className="btn btn-accent font-kristi mx-auto flex justify-center items-center"
                >
                    <GrUpdate className="font-bold" />
                  <p>Update</p>
                </button>
              </div>
              {/* <button className="btn absolute right-0 top-0 border-red-500 btn-error btn-circle btn-outline text-2xl font-bold -translate-x-2 translate-y-2 ">
                <IoCloseSharp />
              </button> */}
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default SingleItem;
