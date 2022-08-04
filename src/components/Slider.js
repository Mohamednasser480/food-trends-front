import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { EffectCreative, Autoplay, EffectFade } from "swiper";
import Button from "./UI/Button";

export default function Slider() {
  return (
    <div className="overflow-hidden " data-aos="fade-up">
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
        <SwiperSlide className="h-[600px!important] bg-[#F0EBD8] ">
          <div className="container  flex h-full flex-col justify-between md:items-center lg:flex-row">
            <div className="flex w-full flex-col items-center justify-center p-5 text-center lg:items-start lg:justify-start lg:text-start ">
              <h3 className="mb-4 text-2xl text-orange-600 md:text-3xl">
                Taste of Nature
              </h3>
              <h4 className="font-worthbites-rough text-5xl uppercase  text-green-900 sm:text-6xl md:text-7xl lg:text-8xl">
                Eat Clean and Green.
              </h4>
              <h4 className="font-worthbites-rough text-5xl uppercase text-green-900 sm:text-6xl md:text-7xl lg:text-8xl">
                Eat Organic
              </h4>
              <Button variant="secondary" className="mt-5">
                Shop Now
              </Button>{" "}
            </div>

            <img
              className="self-end lg:w-1/2"
              src="https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/slide2_01.png"
              alt=""
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-[600px!important] bg-[#D6EFDD]">
          <div className="container mx-auto flex h-full flex-col justify-between md:items-center lg:flex-row ">
            <div className="flex w-full flex-col items-center justify-center p-5 text-center lg:items-start lg:justify-start lg:text-start ">
              <h3 className="mb-4 text-2xl text-orange-600 md:text-3xl">
                Taste of Nature
              </h3>
              <h4 className="font-worthbites-rough  text-5xl uppercase  text-green-900 sm:text-6xl md:text-7xl lg:text-8xl">
                Grow Healthier
              </h4>
              <h4 className="font-worthbites-rough text-5xl uppercase text-green-900 sm:text-6xl md:text-7xl lg:text-8xl">
                With Organic Food
              </h4>
              <Button variant="secondary" className="mt-5" to="/shop">
                Shop Now
              </Button>
            </div>

            <img
              className="self-end lg:w-1/2"
              src="https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/slide2_02.png"
              alt=""
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-[600px!important] bg-[#EDE1CE]">
          <div className="container mx-auto flex h-full flex-col justify-between md:items-center lg:flex-row">
            <div className="flex w-full flex-col items-center justify-center  p-5 text-center lg:items-start lg:justify-start lg:text-start ">
              <h3 className="mb-4 text-2xl text-orange-600 md:text-3xl">
                Taste of Nature
              </h3>
              <h4 className="font-worthbites-rough text-5xl uppercase  text-green-900 sm:text-6xl md:text-7xl lg:text-8xl">
                Food Filled With
              </h4>
              <h4 className="font-worthbites-rough text-5xl uppercase text-green-900 sm:text-6xl md:text-7xl lg:text-8xl">
                The Essence Of Nature
              </h4>
              <Button variant="secondary" className="mt-5">
                Shop Now
              </Button>{" "}
            </div>

            <img
              className="self-end lg:w-1/2"
              src="https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/slide2_03.png"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
