import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import {
  getMostSimilar,
  similarProductsSelector,
  similarProductsStatusSelector,
} from "../../../store/slices/products";
import ProductsLoader from "../../UI/ProductsLoader";

export default function SimilarProducts({ productCategory, id }) {
  const dispatch = useDispatch();
  const similarProducts = useSelector(similarProductsSelector);
  const similarProductsStatus = useSelector(similarProductsStatusSelector);

  useEffect(() => {
    dispatch(getMostSimilar(productCategory));
  }, []);

  const [unqiueSimiliarProds, setUniqueSimiliarProds] = useState([]);
  useEffect(() => {
    getUniqueProds();
  }, [similarProducts]);

  function getUniqueProds() {
    if (similarProducts.length <= 1) {
      return;
    }
    const uniqueProducts = similarProducts.filter((el) => el._id !== id);
    setUniqueSimiliarProds(uniqueProducts);
  }

  return (
    unqiueSimiliarProds.length > 1 && (
      <div className="max-w-full border-2 py-12" data-aos="fade-down">
        <div className="container">
          <Typography component={"h2"} className="text-center  text-primary">
            Similar Products
          </Typography>
        </div>

        <div className="container relative w-full py-6">
          {similarProductsStatus == "Pending" ? (
            <ProductsLoader />
          ) : (
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
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
              {unqiueSimiliarProds.map((prod) => {
                return (
                  <SwiperSlide key={prod.id}>
                    <ProductItem productDetails={prod} relative={true} />
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
          )}
        </div>
      </div>
    )
  );
}
