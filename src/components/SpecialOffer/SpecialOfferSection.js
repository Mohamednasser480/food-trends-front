import React from "react";
import { CountDwon } from "./";
import { Button, Typography } from "../UI";
import { useCountdown } from "./CounterHook";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import {
  saveCartItem,
  selectAllCartItems,
  selectStatus,
} from "../../store/slices/cart";
import { useNavigate } from "react-router-dom";
const SpecialOfferSection = () => {
  const item = {
    _id: "SpecialOffer#000000100001",
    productName: "FRESH FRUIT BOX",
    images: [`${require("../../assets/SpecialOffer1.png")}`],
    offerImg: `${require("../../assets/SpecialOffer2.png")}`,
    offerExpier: "2022-08-24T14:11:59.604Z",
    _id: "62f7a8ee638f98104c72294e",
    summary: "FRESH FRUIT BOX",
    description:
      "Organic foods are the only source which we can rely on to take proper health care. Organic food is the most nutritious food and should be consumed by everyone.",
    weight: 10,
    category: "fruits",
    price: 29.0,
    inStock: 200,
    discount: 0,
    rate: 0,
    numberOfReviews: 0,
    vendor: "62f8368bdd82d96cf75ec13c",
  };
  const navigate = useNavigate();

  const [days, hours, mins, secs] = useCountdown(item.offerExpier);
  const dispatch = useDispatch();
  const cartProducts = useSelector(selectAllCartItems);
  const productQuantity =
    cartProducts.find((cartProduct) => cartProduct._id === item._id)
      ?.quantity || 0;
  return (
    <div
      className="flex min-h-[600px] flex-wrap bg-[#F0EBD8] py-4 px-0 lg:px-20"
      data-aos="fade-up"
    >
      <div className="container m-auto flex flex-wrap">
        <div
          className="relative w-full flex-col  lg:w-6/12 "
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img src={item?.images[0]} alt="..." className="md:mx-auto" />
          <img
            className=" absolute left-10 top-14 m-2 w-24 lg:w-32 "
            alt={item.productName}
            src={item.offerImg}
          />
        </div>
        <div
          className="my-auto w-full flex-col text-center lg:w-6/12"
          data-aos="fade-up"
          data-aos-delay="350"
        >
          <div className=" container my-4 px-5">
            <Typography
              component={"subtitle1"}
              className={" font-satoshi mb-4 text-secondary"}
            >
              Fresh and Organic
            </Typography>
            <Typography
              component={"h1"}
              className={"!text-6xl text-primary md:text-7xl"}
            >
              FRESH FRUIT BOX
            </Typography>

            <Typography
              component={"body2"}
              className={"leading-relaxe mt-3 text-sm"}
            >
              Organic foods are the only source which we can rely on to take
              proper health care. Organic food is the most nutritious food and
              should be consumed by everyone.
            </Typography>
          </div>
          <CountDwon days={days} hours={hours} mins={mins} secs={secs} />
          <Button
            variant="secondary"
            className="my-5 w-4/6 !tracking-normal text-white transition-all duration-700 hover:bg-[#3D6642] lg:w-6/12"
            onClick={() => {
              // dispatch(
              //   saveCartItem({
              //     ...item,
              //     quantity: productQuantity + 1,
              //   })
              // );

              // toast.success(`${item?.productName} Added!`, {
              //   position: "bottom-left",
              //   autoClose: 1000,
              // });

              navigate("/shop");
            }}
          >
            {/* Add To Bag */}
            Shop Now!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SpecialOfferSection;
