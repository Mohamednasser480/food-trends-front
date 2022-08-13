import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  categoryStateSelector,
  fetchCategories,
} from "../../store/slices/category";
import { ProductsLoader, Typography } from "../UI";
import { Category } from "./";
import { useSelector } from "react-redux";

// const categories = [
//   {
//     image: require("../../assets/CategoryItem1.jpeg"),
//     title: "Dairy",
//     itemsNumber: 1,
//     link: "Dairy",
//   },
//   {
//     image: require("../../assets/CategoryItem2.jpeg"),
//     title: "Fruits",
//     itemsNumber: 2,
//     link: "Fruits",
//   },
//   {
//     image: require("../../assets/CategoryItem3.jpeg"),
//     title: "Bakery",
//     itemsNumber: 3,
//     link: "Bakery",
//   },
//   {
//     image: require("../../assets/CategoryItem4.jpeg"),
//     title: "Veggies",
//     itemsNumber: 4,
//     link: "Veggies",
//   },
//   {
//     image: require("../../assets/CategoryItem5.jpeg"),
//     title: "Fresh Meat",
//     itemsNumber: 5,
//     link: "Meat",
//   },
//   {
//     image: require("../../assets/CategoryItem5.jpeg"),
//     title: "Chicken",
//     itemsNumber: 5,
//     link: "Chicken",
//   },
// ];
export default function CategoriesSection(props) {
  const dispatch = useDispatch();
  const { categories, isLoading, error } = useSelector(categoryStateSelector);

  let [categoriesToRender, setCategoriesToRender] = useState(categories);

  function addPhotosToCategories() {
    const categoriesWithPics = [];
    for (const cat of categories) {
      categoriesWithPics.push({
        name: cat._id,
        count: cat.count,
        image: findImageForCategory(cat._id),
      });
    }
    setCategoriesToRender(categoriesWithPics);
  }

  function findImageForCategory(categoryName) {
    switch (categoryName) {
      case "bakery":
        return require("../../assets/Categories/Bakery.jpg");
        break;

      case "fruits":
        return require("../../assets/Categories/Fruits.jpg");
        break;

      case "dairy":
        return require("../../assets/Categories/Dairy.jpg");
        break;

      case "veggies":
        return require("../../assets/Categories/Veggies.jpg");
        break;

      case "meat":
        return require("../../assets/Categories/Meat.jpg");
        break;

      case "chicken":
        return require("../../assets/Categories/Chicken.jpg");
        break;

      default:
        return require("../../assets/Categories/default.jpg");
        break;
    }
  }

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  useEffect(() => {
    addPhotosToCategories();
  }, [categories]);

  return (
    <div className="container py-14 text-center" data-aos="fade-up">
      {props.subtitle || (
        <h3 className="text-md md:text-md font-satoshi mb-4 font-bold text-secondary">
          Fresh and Organic
        </h3>
      )}

      <Typography
        component={"h1"}
        className={"text-6xl tracking-normal text-primary md:text-7xl"}
      >
        {props.title || "SURPRISE, IT’S ALL ORGANIC"}
      </Typography>

      <div className="flex flex-wrap justify-center gap-5 py-10 ">
        {isLoading ? (
          <ProductsLoader />
        ) : (
          categoriesToRender.map((cat, index) => {
            return (
              <Category
                key={index}
                imageSrc={cat.image}
                title={cat.name}
                itemsNumber={cat.count}
                navigateTo={`/categories/${cat.name}`}
                index={index}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
