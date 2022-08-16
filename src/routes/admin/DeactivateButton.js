import React from "react";
import { useDispatch } from "react-redux";
import { deactivateUser } from "../../store/slices/admin";

export default function DeactivateButton({ userId }) {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(deactivateUser(userId));
  };
  return (
    <button
      onClick={onClickHandler}
      className="rounded-lg bg-orange-400  py-1 px-4 font-bold text-white transition-all  duration-300 hover:bg-orange-600 dark:text-blue-500"
      >
      Refuse
    </button>
  );
}
