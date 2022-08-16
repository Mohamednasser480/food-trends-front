import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../../store/slices/admin";

export default function DeleteButton({ userId }) {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(deleteUser(userId));
  };
  return (
    <button
      onClick={onClickHandler}
      className="rounded-lg bg-red-500  py-1 px-4 font-bold text-white transition-all duration-300 hover:bg-red-700 dark:text-blue-500"
    >
      Delete
    </button>
  );
}
