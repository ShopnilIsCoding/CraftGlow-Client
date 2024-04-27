import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import {Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter';
import Lottie from 'lottie-react';
import banneranim from '../Lotties/bannerlottie.json'
const Banner = () => {
    return (
        <div className=" rounded-b-xl flex justify-between items-center p-8 lg:0-16 lg:rounded-b-3xl mb-4 lg:mb-8 bg-base-200 shadow-xl">
            <div className='w-1/2'>
            <h1 className='text-3xl font-kristi text-center mb-3'><Typewriter words={["Explore the art of Card Making","Discover the elegance of Paper Quilling","Create beauty with Glass Painting","Unleash creativity through Lampworking","Bring color to life with Glass Staining"]} loop={true} cursor={true} cursorStyle={'...'} /></h1>
            
            <div className='flex items-center justify-between items-center gap-4'>
            <div className='clip-circle-50 rounded-full overflow-hidden  mt-3 border-4 border-rose-300 w-1/2'><Lottie className='' animationData={banneranim}></Lottie>
            
            </div>
            <p className='font-fair text-xl mt-4 w-1/2 font-medium'>Discover the captivating world of paper crafts and glass art! From intricate card making and delicate quilling to mesmerizing glass painting and vibrant lampworking, immerse yourself in the beauty of handcrafted artistry. Unleash your creativity and bring your visions to life with our curated selection of tools and techniques. Let your imagination soar and transform ordinary materials into extraordinary works of art.</p>
            </div>
            </div>
            <div className='w-1/2 lg:w-1/3'><Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        effect={'fade'}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay,EffectFade,Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className='w-full lg:h-[550px] h-[300px] rounded-xl' src="/paper quelling.jpg"/></SwiperSlide>
        <SwiperSlide><img className='w-full lg:h-[550px] h-[300px] rounded-xl' src="/Cardmaking.jpeg" /></SwiperSlide>
        <SwiperSlide><img className='w-full lg:h-[550px] h-[300px] rounded-xl' src="/lampworking.jpg" /></SwiperSlide>
        <SwiperSlide><img className='w-full lg:h-[550px] h-[300px] rounded-xl' src="/Stainedglass.jpeg" /></SwiperSlide>
        <SwiperSlide><img className='w-full lg:h-[550px] h-[300px] rounded-xl' src="/glass_painting.jpeg" /></SwiperSlide>
        <SwiperSlide><img className='w-full lg:h-[550px] h-[300px] rounded-xl' src="/lamp_working.jpeg" /></SwiperSlide>
      </Swiper></div>
        </div>
    );
};

export default Banner;