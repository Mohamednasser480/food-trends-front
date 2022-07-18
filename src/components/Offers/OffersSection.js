import React from "react";

import { OfferItem } from "./";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";

// let bgColors = ["#F0EBD8","#E0EFEC","#DCE7C5"];
let bgColors = ["#F0EBD8","#F0EBD8","#F0EBD8"];

const offers = [
  { title: "Essential Prices", offer: "Taste of Nature" ,image:`${require("../../assets/offers1.jpeg")}`,navigateTo:"/shop"},
  { title: "Meat And Poultry", offer: "Buy 1 Get 1",image:`${require("../../assets/offers2.jpeg")}` ,navigateTo:"/shop" },
  { title: "Fresh and Organic", offer: "30% Off" ,image:`${require("../../assets/offers3.jpeg")}` ,navigateTo:"/shop"},
];

export default function OffersSection() {
  return (
    <div className="pb-16">
      <Swiper
        className="container"
        spaceBetween={50}
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay
        loop
        // width={300}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },

        }}
      >
        {offers.map((el, index) => {
          return (
            <SwiperSlide key={el.title}>
              <OfferItem
                title={el.title}
                offer={el.offer}
                image={el.image}
                navigateTo={el.navigateTo}
                // bgColor={`${bgColors[index]}`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
