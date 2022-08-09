import React from "react";
import { Link } from "react-router-dom";
import { QuantityInput } from "./";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartTableRow = (props) => {
  const { cartProduct, onQuantitySubmit, onItemRemove } = props;
  const { _id, productName, images, price, quantity } = cartProduct;
  console.log("quantity", quantity);

  return (
    <tr>
      <td>
        <Link
          to={`/shop/${_id}`}
          className="flex items-center gap-3 capitalize transition-colors hover:text-primary"
        >
          <img
            className="hidden max-w-full lg:block"
            src={images[0]}
            alt={productName}
          />
          {productName}
        </Link>
      </td>
      <td>
        <QuantityInput
          cartProduct={cartProduct}
          onQuantitySubmit={onQuantitySubmit}
        />
      </td>
      <td className="text-primary">${price}</td>
      <td className="text-bold">${(quantity * price).toFixed(2)}</td>
      <td>
        <button
          onClick={() => onItemRemove(_id)}
          className="text-base-400 transition-colors hover:text-error"
        >
          <RiDeleteBin6Line size="18px" />
        </button>
      </td>
    </tr>
  );
};

export default CartTableRow;
