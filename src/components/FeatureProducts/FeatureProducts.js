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

// Fetch Products Here..
let products = [
  {
    _id: "62ed0badf88a984be95ee7f5",
    productName: "asdasd",
    summary: "asdad",
    description: "asdasd",
    images: [
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
    ],
    category: "Fruits",
    price: 121,
    inStock: 12,
    rate: 11,
    numberOfReviews: 3,
    vendor: "62ec4827670eb14e0122f436",
    createdAt: "2022-08-05T12:23:09.951Z",
    updatedAt: "2022-08-05T20:54:06.647Z",
    __v: 0,
  },
  {
    _id: "62ed0bcdf88a984be95ee7f8",
    productName: "asdsad",
    summary: "asdasd",
    description: "asdasd",
    images: [
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
    ],
    category: "Bakery",
    price: 12,
    inStock: 12,
    rate: 15,
    numberOfReviews: 3,
    vendor: "62ec4827670eb14e0122f436",
    createdAt: "2022-08-05T12:23:41.757Z",
    updatedAt: "2022-08-05T21:02:22.190Z",
    __v: 0,
  },
  {
    _id: "62ed0bf2f88a984be95ee7fb",
    productName: "asdasd",
    summary: "asd",
    description: "asdas",
    images: [
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
    ],
    category: "Bakery",
    price: 12,
    inStock: 1,
    rate: 5,
    numberOfReviews: 1,
    vendor: "62ec4827670eb14e0122f436",
    createdAt: "2022-08-05T12:24:18.866Z",
    updatedAt: "2022-08-05T21:03:09.604Z",
    __v: 0,
  },
  {
    _id: "62ed0c0ef88a984be95ee7fe",
    productName: "asd",
    summary: "asd",
    description: "asda",
    images: [
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
    ],
    category: "Bakery",
    price: 12,
    inStock: 9,
    rate: 0,
    numberOfReviews: 0,
    vendor: "62ec4827670eb14e0122f436",
    createdAt: "2022-08-05T12:24:46.104Z",
    updatedAt: "2022-08-05T12:24:46.104Z",
    __v: 0,
  },
  {
    _id: "62ed25dc027f71ca1ba59788",
    productName: "Shakhal?/",
    summary: "ehhh",
    description: "YESSS",
    images: [
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
    ],
    category: "Fruits",
    price: 12,
    inStock: 12,
    rate: 0,
    numberOfReviews: 0,
    vendor: "62ec4827670eb14e0122f436",
    createdAt: "2022-08-05T14:14:52.457Z",
    updatedAt: "2022-08-05T14:14:52.457Z",
    __v: 0,
  },
  {
    _id: "62ed264c027f71ca1ba5978b",
    productName: "Eshtaghl ya 3am",
    summary: "qw",
    description: "q",
    images: [
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
    ],
    category: "Bakery",
    price: 12,
    inStock: 12,
    rate: 0,
    numberOfReviews: 0,
    vendor: "62ec4827670eb14e0122f436",
    createdAt: "2022-08-05T14:16:44.705Z",
    updatedAt: "2022-08-05T14:16:44.705Z",
    __v: 0,
  },
  {
    _id: "62ed28e4539b5574cab3f207",
    productName: "Bolaven Banana",
    summary:
      "he banana is an anytime, year-round snack. We like them fully yellow with just a dusting of brown freckles. But super-ripe, meltingly sweet bananas and firmer greenish ones have their fans too. Slice them onto cereal or pancakes, fold into fruit salad, blend into smoothies, and bake into muffins.",
    description:
      "The banana is an anytime, year-round snack. We like them fully yellow with just a dusting of brown freckles. But super-ripe, meltingly sweet bananas and firmer greenish ones have their fans too. Slice them onto cereal or pancakes, fold into fruit salad, blend into smoothies, and bake into muffins. Heat brings out bananas’ creamy sweetness. Try baking, broiling, or sautéing them with butter and sugar for a luscious dessert.",
    images: [
      "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_fruits_veggies_03.1-600x600.jpg",
      "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_fruits_veggies_03.2-600x600.jpg",
    ],
    category: "fruit",
    price: 5.99,
    inStock: 335,
    rate: 0,
    numberOfReviews: 0,
    vendor: "62ed27f4539b5574cab3f202",
    createdAt: "2022-08-05T14:27:48.099Z",
    updatedAt: "2022-08-05T14:27:48.099Z",
    __v: 0,
  },
  {
    _id: "62ed2971539b5574cab3f20a",
    productName: "Broccoli",
    summary:
      "We cut off the stems and leave you with the tight and springy broccoli crowns. With its cabbage-like flavor and satisfying crunch, we think of broccoli as one of the ultimate vegetables. It’s nutritious, low in calories, available year-round and hearty. Steam it, stir-fry it, sauté it, bake it in casseroles, purée it in soups or dunk it raw in dressing or dips.",
    description:
      "We cut off the stems and leave you with the tight and springy broccoli crowns. With its cabbage-like flavor and satisfying crunch, we think of broccoli as one of the ultimate vegetables. It’s nutritious, low in calories, available year-round and hearty. Steam it, stir-fry it, sauté it, bake it in casseroles, purée it in soups or dunk it raw in dressing or dips.",
    images: [
      "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_fruits_veggies_05.8-540x540.jpg",
    ],
    category: "veggies",
    price: 9.85,
    inStock: 444,
    rate: 0,
    numberOfReviews: 0,
    vendor: "62ed27f4539b5574cab3f202",
    createdAt: "2022-08-05T14:30:09.323Z",
    updatedAt: "2022-08-05T14:30:09.323Z",
    __v: 0,
  },
  {
    _id: "62ed2a23539b5574cab3f20d",
    productName: "Butter",
    summary:
      "Nature’s Promise Organic products represent what nature intended.",
    description:
      "Nature’s Promise Organic products represent what nature intended. They meet all USDA Organic certification requirements with ingredients that are produced with respect for the environment. Great tasting products you can trust. That’s our promise to you.",
    images: [
      "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/07/organic_butter-_-eggs_01.1-540x540.jpg",
    ],
    category: "Butter",
    price: 4.99,
    inStock: 424,
    rate: 0,
    numberOfReviews: 0,
    vendor: "62ed27f4539b5574cab3f202",
    createdAt: "2022-08-05T14:33:07.028Z",
    updatedAt: "2022-08-05T14:33:07.028Z",
    __v: 0,
  },
  {
    _id: "62ed2ab1539b5574cab3f210",
    productName: "Chicken Eggs Food Trend",
    summary:
      "All of our eggs are from hens who roam outdoors on acres of pasture, feeding on grass and enjoying the sunshine…nutrition as nature intended.",
    description:
      "All of our eggs are from hens who roam outdoors on acres of pasture, feeding on grass and enjoying the sunshine…nutrition as nature intended. In addition, we provide our hens supplemental feed inside the barn for snacking when they nest and come in to rest at night. Although our conventional feed is not organic, our pastures are completely pesticide free, herbicide free, and chemical free — and are rotated to promote healthy vegetation. (from Handsome Brook Farm)",
    images: [
      "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/07/organic_butter-_-eggs_02.2-540x540.jpg",
    ],
    category: "ُEggs",
    price: 9.99,
    inStock: 332,
    rate: 0,
    numberOfReviews: 0,
    vendor: "62ed27f4539b5574cab3f202",
    createdAt: "2022-08-05T14:35:29.953Z",
    updatedAt: "2022-08-05T14:35:29.953Z",
    __v: 0,
  },
  {
    _id: "62ed2c1b539b5574cab3f213",
    productName: "Fruit Jam",
    summary:
      "Families have loved our fruits Jam for more than 100 years, and for good reason. With just the right balance of fruit and sweetness, we use ripe berries and let the natural flavors intensify in the making.",
    description:
      "Families have loved our fruits Jam for more than 100 years, and for good reason. With just the right balance of fruit and sweetness, we use ripe berries and let the natural flavors intensify in the making. Add Smucker’s Seedless Strawberry Jam to balsamic vinaigrettes, pair with dark chocolate, or go classic and make a tasty PB & J.",
    images: [
      "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_Juices_02.1-540x540.jpg",
    ],
    category: "ُJuices",
    price: 59,
    inStock: 456,
    discount: 54,
    rate: 0,
    numberOfReviews: 0,
    vendor: "62ed27f4539b5574cab3f202",
    createdAt: "2022-08-05T14:41:31.567Z",
    updatedAt: "2022-08-05T14:48:42.141Z",
    __v: 0,
  },
];

export default function FeatureProducts() {
  return (
    <div className="container py-14" data-aos="fade-down">
      <SectionTitle text={"Feature Products"} navigateTo={"/shop"} />

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
    </div>
  );
}
