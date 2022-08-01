import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import { SectionTitle } from "../UI";
import { ProductItem } from "./";

let products = [
  {
    id: 0,
    name: "Lemon (1kg)",
    summary:
      "Lots of juice and a bright, clear, tart flavor that is suprisingly low in acid. The rind has lots of tang with a bitter note thrown in.",
    description:
      "Lots of juice and a bright, clear, tart flavor that is suprisingly low in acid. The rind has lots of tang with a bitter note thrown in.",
    images: [
      "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_fruits_veggies_04.1-690x690.jpg",
      "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_fruits_veggies_04.2-690x690.jpg",
      "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_fruits_veggies_04.3-690x690.jpg",
      "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_fruits_veggies_04_detail-690x690.jpg",
    ],
    category: "Vegetables",
    price: 30.59,
    inStock: 337,
    discount: "0.00",
    vendor: "Mahmoud Meky",
    rating: 3,
  },
  {
    id: 1,
    name: "Lemon (1kg)",
    summary:
      "Lots of juice and a bright, clear, tart flavor that is suprisingly low in acid. The rind has lots of tang with a bitter note thrown in.",
    description:
      "Lots of juice and a bright, clear, tart flavor that is suprisingly low in acid. The rind has lots of tang with a bitter note thrown in.",
    images: [
      "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_fruits_veggies_05.6-450x450.jpg",
      "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_fruits_veggies_04.2-690x690.jpg",
      "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_fruits_veggies_04.3-690x690.jpg",
      "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_fruits_veggies_04_detail-690x690.jpg",
    ],
    category: "Vegetables",
    price: 30.59,
    inStock: 337,
    discount: "0.00",
    vendor: "Mahmoud Meky",
    rating: 3,
  },
  {
    id: 2,
    name: "Lemon (1kg)",
    summary:
      "Lots of juice and a bright, clear, tart flavor that is suprisingly low in acid. The rind has lots of tang with a bitter note thrown in.",
    description:
      "Lots of juice and a bright, clear, tart flavor that is suprisingly low in acid. The rind has lots of tang with a bitter note thrown in.",
    images: [
      "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_fruits_veggies_01.2-450x450.jpg",
      "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_fruits_veggies_04.2-690x690.jpg",
      "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_fruits_veggies_04.3-690x690.jpg",
      "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_fruits_veggies_04_detail-690x690.jpg",
    ],
    category: "Vegetables",
    price: 30.59,
    inStock: 337,
    discount: "0.00",
    vendor: "Mahmoud Meky",
    rating: 3,
  },
  {
    id: 3,
    name: "Lemon (1kg)",
    summary:
      "Lots of juice and a bright, clear, tart flavor that is suprisingly low in acid. The rind has lots of tang with a bitter note thrown in.",
    description:
      "Lots of juice and a bright, clear, tart flavor that is suprisingly low in acid. The rind has lots of tang with a bitter note thrown in.",
    images: [
      "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_fruits_veggies_05.7-450x450.jpg",
      "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_fruits_veggies_04.2-690x690.jpg",
      "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_fruits_veggies_04.3-690x690.jpg",
      "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_fruits_veggies_04_detail-690x690.jpg",
    ],
    category: "Vegetables",
    price: 30.59,
    inStock: 337,
    discount: "0.00",
    vendor: "Mahmoud Meky",
    rating: 3,
  },
  {
    id: 4,
    name: "Lemon (1kg)",
    summary:
      "Lots of juice and a bright, clear, tart flavor that is suprisingly low in acid. The rind has lots of tang with a bitter note thrown in.",
    description:
      "Lots of juice and a bright, clear, tart flavor that is suprisingly low in acid. The rind has lots of tang with a bitter note thrown in.",
    images: [
      "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/07/organic_butter-_-eggs_02.1-450x450.jpg",
      "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_fruits_veggies_04.2-690x690.jpg",
      "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_fruits_veggies_04.3-690x690.jpg",
      "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_fruits_veggies_04_detail-690x690.jpg",
    ],
    category: "Vegetables",
    price: 30.59,
    inStock: 337,
    discount: "0.00",
    vendor: "Mahmoud Meky",
    rating: 3,
  },
  {
    id: 5,
    name: "Lemon (1kg)",
    summary:
      "Lots of juice and a bright, clear, tart flavor that is suprisingly low in acid. The rind has lots of tang with a bitter note thrown in.",
    description:
      "Lots of juice and a bright, clear, tart flavor that is suprisingly low in acid. The rind has lots of tang with a bitter note thrown in.",
    images: [
      "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_freshmeat_05.1-450x450.jpg",
      "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_fruits_veggies_04.2-690x690.jpg",
      "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_fruits_veggies_04.3-690x690.jpg",
      "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_fruits_veggies_04_detail-690x690.jpg",
    ],
    category: "Vegetables",
    price: 30.59,
    inStock: 337,
    discount: "0.00",
    vendor: "Mahmoud Meky",
    rating: 3,
  },
];

export default function FeatureProducts() {
  return (
    <div className="container py-14" data-aos="fade-down">
      <SectionTitle text={"Feature Products"} navigateTo={"/shop"} />

      <div className="relative  py-6">
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          modules={[Navigation, Scrollbar]}
          navigation={{
            nextEl: ".swiper-next ",
            prevEl: ".swiper-prev",
          }}
          loop
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
                <ProductItem productDetails={prod} />
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
