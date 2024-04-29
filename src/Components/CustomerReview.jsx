import { FaStar, FaRegStar } from "react-icons/fa";

const CustomerReview = ({ review }) => {
  const renderStars = (rating) => {
    const stars = [];

    for (let i = 0; i < rating; i++) {
      stars.push(<FaStar key={`star-${i}`} className="text-yellow-500" />);
    }

    for (let i = rating; i < 5; i++) {
      stars.push(
        <FaRegStar key={`empty-star-${i}`} className="text-yellow-600" />
      );
    }

    return stars;
  };

  return (
    <div className="flex flex-col border p-4 rounded-lg shadow-lg glass bg-violet-300 max-w-md h-[200px] mr-3 my-3 lg:my-6">
      <div className="flex items-center mb-2">{renderStars(review.rating)}</div>
      <div className="mb-2">
        <p className="text-gray-700 font-serif">{review.feedback}</p>
      </div>
      <div className="flex justify-between items-center flex-1">
        <span className="font-bold font-kristi text-black">{review.customerName}</span>

        <span className="text-rose-600">{review.date}</span>
      </div>
    </div>
  );
};

export default CustomerReview;
