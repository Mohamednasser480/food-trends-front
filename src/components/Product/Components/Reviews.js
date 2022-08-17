import React from "react";
import { ReviewItem } from "../";
export default function Reviews({ reviews }) {
  return (
    <section className="py-5">
      {reviews.length ? (
        <h6 className="mb-8 text-xl font-medium">{reviews.length} Reviews</h6>
      ) : (
        ""
      )}
      <div>
        {reviews.map((item, index) => {
          return (
            <ReviewItem
              key={index}
              userName={item.customer?.name || "Deleted User"}
              image={
                item.customer?.image ||
                require("../../../assets/default-user.png")
              }
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
