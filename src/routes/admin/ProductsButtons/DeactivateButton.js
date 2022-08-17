import React from "react";
import { useDispatch } from "react-redux";
import { deactivateUser } from "../../../store/slices/admin";
import { deactivateProduct } from "../../../store/slices/adminProducts";

export default function DeactivateButton({ productId }) {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(deactivateProduct(productId));
  };
  return (
    <button
      onClick={onClickHandler}
      className="rounded-lg bg-red-500  py-1 px-4 font-bold text-white transition-all  duration-300 hover:bg-red-600 dark:text-blue-500"
      >
      Refuse
    </button>
  );
}
