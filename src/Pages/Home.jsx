import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import SingleItem from "../Components/SingleItem";
import Lottie from "lottie-react";
import loadingAnim from "../Lotties/loading.json";
import { useEffect, useState } from "react";
import Categories from "../Components/Categories";
import CustomerReview from "../Components/CustomerReview";
import Marquee from "react-fast-marquee";
import FAQ from "../Components/FAQ";
const Home = () => {
    const data=useLoaderData();
    const slicedData=data.slice(0,6)
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (data) {
            setIsLoading(false);
        }
    }, [data]);
    const customerReviews = [
        {
          category: 'Card Making',
          rating: 4.5,
          feedback: "I loved the variety of materials available for card making. The tutorials were clear and helped me create beautiful cards for my friends and family!",
          customerName: 'Sarah T.',
          date: 'April 25, 2024'
        },
        {
          category: 'Paper Quilling & Origami',
          rating: 5,
          feedback: "The paper quilling and origami section was fantastic! I learned new techniques and the quality of the paper provided was excellent. My projects turned out amazing!",
          customerName: 'John M.',
          date: 'April 20, 2024'
        },
        {
          category: 'Glass Painting',
          rating: 4.6,
          feedback: "I had a great time exploring the glass painting resources. The colors were vibrant, and the guides were easy to follow. My glass art projects turned out beautifully!",
          customerName: 'Emily W.',
          date: 'April 15, 2024'
        },
        {
          category: 'Lampworking',
          rating: 4.3,
          feedback: "Lampworking was a unique experience for me! The tools and materials were of high quality, and the step-by-step instructions helped me create stunning glass pieces.",
          customerName: 'Mike B.',
          date: 'April 10, 2024'
        },
        {
          category: 'Glass Dying & Staining',
          rating: 5,
          feedback: "The glass dying and staining section had everything I needed to create beautiful stained glass designs. The vibrant colors and patterns I achieved were beyond my expectations!",
          customerName: 'Jessica K.',
          date: 'April 5, 2024'
        }
      ];
      
    
    return (
        <div>
            <Banner></Banner>
            <h1 className="text-5xl font-kristi text-center mt-10">Craft Items</h1>
            <p className="mt-4 text-lg text-rose-400 font-serif mx-auto lg:max-w-lg text-center" data-aos="zoom-in-down">Explore our carefully curated collection of crafted items, hand-selected for their quality and artistic flair. From beautifully crafted cards to stunning glass art, each piece is designed to inspire and impress.</p>
            <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8 mt-3 lg:mt-6 p-3 lg:p-6">
            {isLoading?<div className="lg:size-96 mx-auto">
                <Lottie animationData={loadingAnim} loop={true} />
            </div>: slicedData.map(item=><SingleItem delete={false} update={false} item={item} key={item._id}></SingleItem>)}

            </div>
            <div className="lg:mb-12">
            <h1 className="text-5xl font-kristi text-center mt-10">Categories</h1>
            <p className="mt-4 text-lg text-rose-400 font-serif mx-auto lg:max-w-lg text-center" data-aos="zoom-in-down">Discover our range of creative categories! From card making to glass painting, explore each section to find your best match. Click on a category card to browse related items !</p>
                <div >
                <Categories></Categories>
                </div>
            </div>
            <div className="lg:mb-12">
            <h1 className="text-5xl font-kristi text-center mt-10">What Our Customer Says</h1>
            <p className="mt-4 text-lg text-rose-400 font-serif mx-auto lg:max-w-lg text-center" data-aos="zoom-in-down">At CraftGlow, we value our customers' experiences and feedback. Our 'What Our Customers Say' section features testimonials from our satisfied clients who have used our paper crafts and glass art products.</p>
                <Marquee pauseOnHover={true} className="cursor-pointer">
                    {customerReviews.map((review, index) => (
                        <CustomerReview key={index} review={review} />
                    ))}
                </Marquee>
            </div>
            <div>
                <FAQ></FAQ>
            </div>
        </div>
    );
};

export default Home;