import { CiStar } from "react-icons/ci";
const SingleItem = ({item}) => {
    const {image,rating,status,itemName,price,userName}=item;
    return (
        <div>
            <div className="font-work p-6 border rounded-3xl hover:border-green-300 hover:border-2 lg:hover:scale-105 cursor-pointer lg:duration-300 space-y-4 bg-base-300">
            <div className="mb-2 lg:mb-6 glass
            py-6 lg:py-12 rounded-3xl relative">
                <img className="h-[166px] lg:h-[266px] md:h-[200px] w-10/12 rounded-xl mx-auto" src={image} alt="book_image" />
                <p className="font-kristi absolute top-0 right-0 bg-green-300 rounded-full p-2 translate-x-[20%] -translate-y-[20%] text-primary">{price}</p>
            </div>
            <div className="text-xl text-center font-kristi font-bold">
                    {itemName}
                </div>
                <h2 className="font-fair font-bold text-xl ">{}</h2>
                <p className="font-medium font-serif">By : {userName}</p>
                <hr className="border-dashed border-gray-300" />
                <div className="flex justify-between items-center">
                    <p className="font-medium">{status}</p>
                    <p className="font-medium flex justify-center items-center gap-2">{rating}<CiStar className="text-yellow-500 text-xl" /></p>
                
                </div>
        </div>
        </div>
    );
};

export default SingleItem;