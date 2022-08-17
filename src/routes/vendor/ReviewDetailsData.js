import React from "react";
import { ProductRating } from "../../components/UI";

const ReviewDetailsData = ({ item }) => {
  const isExist = item.customer;
  return (
    <tr className=" text-center">
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              {isExist ? (
                <img src={item.customer.image} alt={item.customer.name} />
              ) : null}
            </div>
          </div>
          <div>
            {isExist ? (
              <div className="font-bold">{item.customer.name}</div>
            ) : (
              <div>
                <span className=" font-bold">Deleted User</span>
              </div>
            )}
          </div>
        </div>
      </td>
      <td>
        <div>{item.product.productName}</div>
      </td>
      <td>
        <ProductRating
          rating={item.rating}
          editable={false}
          className="justify-center"
        />
      </td>
      <td>
        <span>{item.comment}</span>
      </td>
      <td>{isExist ? item.customer.mobile : "Not Available"}</td>
      <td>{item.createdAt.split("T")[0]}</td>
    </tr>
  );
};

export default ReviewDetailsData;
