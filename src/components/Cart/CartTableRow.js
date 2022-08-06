import React from "react";
import { Link } from "react-router-dom";
import { QuantityInput } from "./";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartTableRow = (props) => {
  const { cartData, onQuantityInput, onItemRemove } = props;

  const { id, productId, name, image, price, quantity, stock } = cartData;

  console.log("quantity", quantity);
  console.log("price", price);

  return (
    <tr>
      <td className="flex items-center gap-3">
        <img className="hidden lg:block" src={image} alt={name} />
        <Link
          to={`/shop/${productId}`}
          className="capitalize transition-colors hover:text-primary"
        >
          {name}
        </Link>
      </td>
      <td>
        <QuantityInput
          value={quantity}
          onQuantityInput={onQuantityInput}
          stock={stock}
        />
      </td>
      <td className="text-primary">${price}</td>
      <td className="text-bold">${(quantity * price).toFixed(2)}</td>
      <td>
        <button
          onClick={() => onItemRemove(id)}
          className="text-base-400 transition-colors hover:text-error"
        >
          <RiDeleteBin6Line size="18px" />
        </button>
      </td>
    </tr>
  );
};

export default CartTableRow;
