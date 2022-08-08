import React from "react";
import { useSelector } from "react-redux";
import { selectUserData } from "../../../../store/slices/auth";
export default function UserSection() {
  const user = useSelector(selectUserData);

  return (
    <div className="mt-8 flex flex-wrap items-center gap-5">
      <div className="h-16 !w-16 overflow-hidden rounded-full">
        <img src={user.image} />
      </div>
      <div className="flex flex-col flex-wrap gap-1">
        <h3 className="font-sans text-lg font-bold">{user.name}</h3>
        <span className="sm:text-md font-sans text-sm font-medium text-base-400">
        {user.email}
        </span>
      </div>
    </div>
  );
}
