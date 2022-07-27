import React from "react";
import { Typography } from "../../UI";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { ProductItem } from "../../FeatureProducts";

export default function SimilarProducts() {
  // Get Similar Products From API
  let products = [
    {
      id: 1,
      title: "Name 1",
      price: 30,
      image:
        "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_fruits_veggies_05.6-450x450.jpg",
      rating: 2.5,
    },
    {
      id: 2,
      title: "Name 2",
      price: 30,
      image:
        "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_fruits_veggies_01.2-450x450.jpg",
      rating: 1,
    },
    {
      id: 3,
      title: "Name 3",
      price: 30,
      image:
        "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_fruits_veggies_05.7-450x450.jpg",
      rating: 4,
    },
    {
      id: 4,
      title: "Name 4",
      price: 30,
      image:
        "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_fruits_veggies_05.6-450x450.jpg",
      rating: 5,
    },
    {
      id: 5,
      title: "Name 5",
      price: 30,
      image:
        "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_fruits_veggies_01.2-450x450.jpg",
      rating: 3.5,
    },
    {
      id: 6,
      title: "Name 6",
      price: 30,
      image:
        "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_fruits_veggies_05.7-450x450.jpg",
      rating: 3,
    },
  ];

  return (
    <div className="border-2 py-12" data-aos="fade-down">
      <div className="container">
        <Typography component={"h2"} className="text-center text-primary">
          Similar Products
        </Typography>
      </div>
      <div className="container relative w-full py-6">
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          modules={[Navigation, Scrollbar]}
          navigation={{
            nextEl: ".swiper-next ",
            prevEl: ".swiper-prev",
          }}
          // loop
          scrollbar={{ draggable: true }}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {products.map((prod) => {
            return (
              <SwiperSlide key={prod.id}>
                <ProductItem
                  id={prod.id}
                  name={prod.title}
                  price={prod.price.toFixed(2)}
                  image={prod.image}
                  rating={prod.rating}
                  relative={true}
                />
              </SwiperSlide>
            );
          })}
          <div className="swiper-next absolute top-1/2 -right-0 z-10 flex cursor-pointer items-center justify-center">
            <MdOutlineKeyboardArrowRight
              size={25}
              className="rounded-full border opacity-40 transition-all hover:bg-secondary-100 hover:opacity-100 md:h-10 md:w-10"
            />
          </div>
          <div className="swiper-prev absolute top-1/2 -left-0 z-10 flex cursor-pointer items-center justify-center">
            <MdOutlineKeyboardArrowLeft
              size={25}
              className="rounded-full border opacity-40 transition-all hover:bg-secondary-100 hover:opacity-100 md:h-10 md:w-10"
            />
          </div>
        </Swiper>
      </div>
    </div>
  );
}
