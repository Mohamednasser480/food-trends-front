import React from "react";
import { SearchModal, UserProfile, WishListSidebar, CartSidebar } from "./";

export default function UserArea() {
  return (
    <>
      <div className="flex items-center gap-3">
        <SearchModal />
        <UserProfile />
        {/* <WishListSidebar /> */}
        <CartSidebar />
      </div>
    </>
  );
}
