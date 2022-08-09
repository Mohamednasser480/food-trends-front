import React from "react";
import { Typography } from "../UI";
import {Category} from "./";

const categories = [
  {
    image: require("../../assets/CategoryItem1.jpeg"),
    title: "Weekly Purchase",
    itemsNumber: 1,
    link: "veggies",
  },
  {
    image: require("../../assets/CategoryItem2.jpeg"),
    title: "Juices",
    itemsNumber: 2,
    link: "Juices",
  },
  {
    image: require("../../assets/CategoryItem3.jpeg"),
    title: "Fruits and Veggies",
    itemsNumber: 3,
    link: "fruits",
  },
  {
    image: require("../../assets/CategoryItem4.jpeg"),
    title: "Butter and Eggs",
    itemsNumber: 4,
    link: "Meat",
  },
  {
    image: require("../../assets/CategoryItem5.jpeg"),
    title: "Fresh Meat",
    itemsNumber: 5,
    link: "Meat",
  },
];

export default function CategoriesSection() {
  return (
    <div className="container py-14 text-center" data-aos="fade-up">
      <h3 className="text-md md:text-md mb-4 font-satoshi font-bold text-secondary" >
        Fresh and Organic
      </h3>
      <Typography
        component={"h1"}
        className={"text-6xl tracking-normal text-primary md:text-7xl"}
      >
        SURPRISE, IT’S ALL ORGANIC
      </Typography>

      <div className="flex flex-wrap justify-center gap-5 py-10 md:gap-14">
        {categories.map((cat,index) => {
          return (
            <Category
              key={index}
              imageSrc={cat.image}
              title={cat.title}
              itemsNumber={cat.itemsNumber}
              navigateTo={`/categories/${cat.link}`}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}
