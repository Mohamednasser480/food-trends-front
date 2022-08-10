import React from "react";
import { ReviewItem } from "../";
export default function Reviews({ reviews }) {
  return (
    <section className="py-5">
      {reviews.length ? (
        <h6 className="mb-8 text-xl font-medium">{reviews.length} Reviews</h6>
      ):""}
      <div>
        {reviews.map((item, index) => {
          return (
            <ReviewItem
              key={index}
              userName={item.customer?.name||"Mahmoud Meky"}
              image={item.customer?.image || "https://www.4read.net/uploads/authors/1534154564.png"}
              rating={item.rating}
              date={new Date(item.createdAt)}
              reviewTitle={item.title}
              reviewBody={item.comment}
            />
          );
        })}
      </div>
    </section>
  );
}
