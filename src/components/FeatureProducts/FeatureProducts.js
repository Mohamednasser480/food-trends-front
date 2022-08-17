import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import {
  getFeaturedProducts,
  productsSelector,
  productsStatusSelector,
} from "../../store/slices/products";
import ProductsLoader from "../UI/ProductsLoader";

export default function FeatureProducts() {
  const dispatch = useDispatch();
  const products = useSelector(productsSelector);
  const loadingStatus = useSelector(productsStatusSelector);
  useEffect(() => {
    dispatch(getFeaturedProducts());
  }, []);
  return (
    <div className="container py-14" data-aos="fade-down">
      <SectionTitle text={"Feature Products"} navigateTo={"/shop"} />
      {loadingStatus == "Pending" ? (
        <ProductsLoader />
      ) : (
        <div className="relative  py-6">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
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
                <SwiperSlide key={prod._id}>
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
      )}
    </div>
  );
}
