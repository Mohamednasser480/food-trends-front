import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "../UI";
import {
  ImageSection,
  ProductDetails,
  SimilarProducts,
  CustomerReviews,
} from "./index";

export default function Product() {
  const { id } = useParams();

  // Fetch Item Here and send each Details to Components
  // Placeholder Product
  let product = {
    id: 1,
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
  };

  // Scroll to Top on Page Load
  function ScrollToTop() {
    // console.log("Scrooled");
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  useEffect(() => {
    ScrollToTop();
  }, [id]);

  return (
    <>
      <Breadcrumb />;
      <div className=" flex flex-col  flex-wrap justify-center gap-2 ">
        <div className="container flex  flex-wrap justify-center gap-2 pb-10">
          <ImageSection productImages={product.images} />
          <ProductDetails product={product} />
        </div>
        <SimilarProducts />
        <CustomerReviews />
      </div>
    </>
  );
}
