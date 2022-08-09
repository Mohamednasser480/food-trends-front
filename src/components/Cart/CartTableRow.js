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
      <td className="flex items-center gap-3 capitalize">
        <Link to={`/shop/${_id}`}>
          <img
            className="hidden w-24 lg:block"
            src={images[0]}
            alt={productName}
          />
        </Link>
        <Link
          to={`/shop/${_id}`}
          className="transition-colors hover:text-primary"
        >
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
