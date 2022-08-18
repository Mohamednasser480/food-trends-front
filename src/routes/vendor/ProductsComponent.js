import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, editSelector } from "../../store/slices/vendor";
import ActionsModel from "./ActionsModel";
import { Link } from "react-router-dom";

const ProductsComponent = ({
  _id,
  productName,
  images,
  price,
  category,
  description,
  summary,
  inStock,
  weight,
  available,
}) => {
  const [modelState, setModelState] = useState(false);
  const editStatus = useSelector(editSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    if (editStatus === "Fulfilled") setModelState(false);
  }, [editStatus]);

  return (
    <>
      <tr className="border-b-[1px]">
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle h-16 w-16">
                <img
                  src={images ? images[0] : ""}
                  alt="Avatar Tailwind CSS Component"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </td>
        <td className="text-md w-12 max-w-lg truncate font-medium">
          <span>{productName}</span>
        </td>
        <td className="w-1/2 whitespace-pre-wrap py-1 px-3 capitalize">
          {description}
        </td>
        <th>{price} LE</th>
        <th>{inStock || "Out of Stock"}</th>
        <th className="capitalize">{category}</th>
        <th
          className={`capitalize ${
            available == "true"
              ? "text-green-500"
              : available == "pending"
              ? "text-orange-500"
              : "text-red-500"
          }`}
        >
          {available == "true"
            ? "Available"
            : available == "pending"
            ? "Pending"
            : "Deleted"}
        </th>
        <th>
          {available !== "false" && (
            <>
              <button
                className="btn  btn-xs border-0	bg-red-400 hover:bg-red-600 hover:text-white"
                onClick={() => {
                  dispatch(deleteProduct(_id));
                }}
              >
                delete
              </button>{" "}
              <button
                className="btn  btn-xs border-0	bg-green-400 hover:bg-green-600 hover:text-white"
                // onClick={() => setModelState(true)}
              >
                <Link to={`/products/${_id}`}>Edit</Link>
              </button>
            </>
          )}
        </th>
      </tr>
    </>
  );
};

export default ProductsComponent;
