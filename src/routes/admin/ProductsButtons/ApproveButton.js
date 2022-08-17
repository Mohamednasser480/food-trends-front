import React from "react";
import { useDispatch } from "react-redux";
import { approveProduct } from "../../../store/slices/adminProducts";

export default function ApproveButton({ productId }) {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(approveProduct(productId));
  };
  return (
    <button
      onClick={onClickHandler}
      className="rounded-lg bg-green-500  py-1 px-2 font-bold text-white transition-all  duration-300 hover:bg-green-700 dark:text-blue-500"
      >
      Activate
    </button>
  );
}
