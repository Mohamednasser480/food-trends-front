import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/slices/auth";

const UserMenu = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => dispatch(logout());

  return (
    <ul className="menu rounded-box absolute top-12 w-48 -translate-x-1/2 bg-white shadow-md">
      <li>
        <a className="capitalize transition-colors hover:bg-black hover:text-white">
          orders
        </a>
      </li>
      <li>
        <a className="capitalize transition-colors hover:bg-black hover:text-white">
          addresses
        </a>
      </li>
      <li>
        <a className="capitalize transition-colors hover:bg-black hover:text-white">
          account details
        </a>
      </li>
      <li>
        <button
          onClick={logoutHandler}
          className="capitalize transition-colors hover:bg-error hover:text-white"
        >
          logout
        </button>
      </li>
    </ul>
  );
};

export default UserMenu;
