import React from "react";
import { ReviewItem } from "../";
export default function Reviews() {
  // Function to Get all reviews
  let reviews = [
    {
      name: "LAURA",
      image:
        "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/07/avatar2-96x96.jpeg",
      rating: 4,
      date: "12 months ago",
      reviewTitle: "Excellent",
      reviewBody:
        "Great service, really good selection of fresh fruit and veg, and the (almost) plastic free packaging is great – love that they pick up the old box to be reused when they deliver. Definitely glad I gave them a try 🙂",
    },
    {
      name: "JENNIFER C.",
      image:
        "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/09/team_02-80x80.jpg",
      rating: 4,
      date: "12 months ago",
      reviewTitle: "Thankyou very much.",
      reviewBody:
        "Thankyou very much. It was much appreciated having fresh vegetables. And your a polite. And friendly business i would. Recommend. You to a. Friend or family",
    },
    {
      name: "OWEN CHRIST",
      image:
        "https://secure.gravatar.com/avatar/7ac1b6757171451821b8c246f9185c8c?s=60&d=mm&r=g",
      rating: 4,
      date: "12 months ago",
      reviewTitle: "Great quality and selection of fruit and veg",
      reviewBody:
        "Great quality and delivery. I will order again. Love the variety and choice of box type and size. To support local charity too – no other box delivery I know does this on a regular basis.",
    },
  ];

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
