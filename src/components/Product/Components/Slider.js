import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function Slider(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={props.className}>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {React.Children.toArray(
          props.images.map((img, index) => {
            return (
              <SwiperSlide
                key={index}
                className="flex max-h-[400px] items-center"
              >
                <img src={`${img}`} />
              </SwiperSlide>
            );
          })
        )}
      </Swiper>
      {React.Children.toArray(
        props.images.length >= 2 && (
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={props.images.length}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper mt-3 "
          >
            {React.Children.toArray(
              props.images.map((img, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="flex !h-[150px]   items-center"
                  >
                    <img
                      alt={index}
                      src={`${img}`}
                      className={`cursor-pointer border-2`}
                    />
                  </SwiperSlide>
                );
              })
            )}
          </Swiper>
        )
      )}
    </div>
  );
}
