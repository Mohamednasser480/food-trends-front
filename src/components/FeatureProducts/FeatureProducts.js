import React from "react";
import { SectionTitle } from "../UI";
import { Product } from "./";

let products = [
  {
    id: 1,
    title: "Name 1",
    price: 30,
    image:
      "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/organic_fruits_veggies_05.6-450x450.jpg",
  },
];

export default function FeatureProducts() {
  return (
    <div className="container py-14">
      <SectionTitle text={"Feature Products"} navigateTo={"/"} />

      <div className="py-6">
        {products.map((prod) => {
          return (
            <Product
              key={prod.id}
              id={prod.id}
              name={prod.title}
              price={prod.price.toFixed(2)}
              image={prod.image}
            />
          );
        })}
      </div>
    </div>
  );
}
