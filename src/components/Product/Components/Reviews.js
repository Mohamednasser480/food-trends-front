import React from "react";
import { ReviewItem } from "../";
export default function Reviews({ reviews }) {
  return (
    <section className="py-5">
      <h6 className="mb-8 text-xl font-medium">{reviews.length} Reviews</h6>
      <div>
        {reviews.map((item, index) => {
          return (
            <ReviewItem
              key={index}
              userName={item.name}
              image={item.image}
              rating={item.rating}
              date={item.date}
              reviewTitle={item.reviewTitle}
              reviewBody={item.reviewBody}
            />
          );
        })}
      </div>
    </section>
  );
}
