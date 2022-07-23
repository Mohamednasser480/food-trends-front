import React from "react";
import { SectionTitle } from "../UI";
import { RatingItem } from "./";

const RatingSection = () => {
  const test = [
    {
      name: "Oliver Q.",
      city: "/ Starling City",
      desc: "“Fresh and reasonable price. I love your food so much, I'm in monthly customer plan and worry free about your quality.“",
      rating: 5,
      img: "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/testimonial_01.png",
    },
    {
      name: "Jennifer C.",
      city: "/ Orlando, FL",
      desc: "“Fast delivery, they take care for each box and I love that. The quality is awesome. My families love their products a lot.“",
      rating: 4.5,
      img: "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/testimonial_03.png",
    },
    {
      name: "Barry Allen",
      city: "/ Central City",
      desc: "“Their customer service is outstanding. I'm always receiving the best box and I love them.”",
      rating: 5,
      img: "https://ecomm.thememove.com/organic/wp-content/uploads/sites/23/2021/10/testimonial_02.png",
    },
  ];
  return (
    <div className=" container my-4" data-aos="fade-up">
      <div className="p-4">
        <SectionTitle text={"CUSTOMERS LOVE"} />
      </div>

      <div className="flex flex-wrap justify-center">
        {React.Children.toArray(
          test.map((item) => {
            return <RatingItem {...item} />;
          })
        )}
      </div>
    </div>
  );
};

export default RatingSection;
