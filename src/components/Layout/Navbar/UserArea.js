import React from "react";
import { SearchSidebar, UserProfile, WishListSidebar, CartSidebar } from "./";

export default function UserArea() {
  return (
    <>
      <div className="flex items-center gap-3">
        <SearchSidebar />
        <UserProfile />
        <WishListSidebar />
        <CartSidebar />
      </div>
    </>
  );
}
