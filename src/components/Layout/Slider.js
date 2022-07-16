import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { EffectCreative, Autoplay, EffectFade } from "swiper";
import Button from "../UI/Button";

export default function Slider() {
    return (
        <div className="overflow-hidden ">

            <Swiper
                grabCursor={true}
                effect={"creative"}
                creativeEffect={{
                    prev: {
                        shadow: false,
                        translate: ["-10%", 0, -1],
                    },
                    next: {
                        translate: ["100%", 0, 0],
                    },
                }}
                modules={[EffectCreative, Autoplay, EffectFade]}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                loop={true}

                className="mySwiper3"
            >

                <SwiperSlide
                    className="bg-[#F0EBD8] h-[600px!important] ">
                    <div className="container  flex justify-between md:items-center flex-col lg:flex-row h-full">
                        <div className="w-full flex flex-col justify-center lg:justify-start items-center text-center lg:items-start lg:text-start p-5 ">
                            <h3 className="text-2xl md:text-3xl text-orange-600 mb-4">Taste of Nature</h3>
                            <h4 className="font-worthbites-rough text-5xl sm:text-6xl  md:text-7xl lg:text-8xl uppercase text-green-900">Eat Clean and Green.</h4>
                            <h4 className="font-worthbites-rough text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase text-green-900">Eat Organic</h4>
                            <Button>Shop Now</Button>
                        </div>

                        <img
                            className="lg:w-1/2 self-end"
                            src="https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/slide2_01.png" alt="" />
                    </div>
                </SwiperSlide>


                <SwiperSlide
                    className="bg-[#D6EFDD] h-[600px!important]">
                    <div className="container mx-auto flex justify-between md:items-center flex-col lg:flex-row h-full ">
                        <div className="w-full flex flex-col justify-center lg:justify-start items-center text-center lg:items-start lg:text-start p-5 ">
                            <h3 className="text-2xl md:text-3xl text-orange-600 mb-4">Taste of Nature</h3>
                            <h4 className="font-worthbites-rough  text-5xl sm:text-6xl  md:text-7xl lg:text-8xl uppercase text-green-900">Grow Healthier</h4>
                            <h4 className="font-worthbites-rough text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase text-green-900">With Organic Food</h4>
                            <Button>Shop Now</Button>

                        </div>

                        <img
                            className="lg:w-1/2 self-end"
                            src="https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/slide2_02.png" alt="" />
                    </div>
                </SwiperSlide>


                <SwiperSlide
                    className="bg-[#EDE1CE] h-[600px!important]">
                    <div className="container mx-auto flex justify-between md:items-center flex-col lg:flex-row h-full">
                        <div className="w-full flex flex-col justify-center lg:justify-start items-center text-center lg:items-start lg:text-start p-5 ">
                            <h3 className="text-2xl md:text-3xl text-orange-600 mb-4">Taste of Nature</h3>
                            <h4 className="font-worthbites-rough text-5xl sm:text-6xl  md:text-7xl lg:text-8xl uppercase text-green-900">Food Filled With</h4>
                            <h4 className="font-worthbites-rough text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase text-green-900">The Essence Of Nature</h4>
                            <Button>Shop Now</Button>
                        </div>

                        <img
                            className="lg:w-1/2 self-end"
                            src="https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/slide2_03.png" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
