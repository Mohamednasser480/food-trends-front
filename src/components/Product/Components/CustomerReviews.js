import React from "react";
import { SectionTitle } from "../../UI";
import { WriteAReview } from "../";

export default function SimilarProducts() {
  return (
    <div className="max-w-full py-12" data-aos="fade-down">
      <div className="container">
        <SectionTitle text={"Customer Reviews"} />
        <WriteAReview />
      </div>
    </div>
  );
}
