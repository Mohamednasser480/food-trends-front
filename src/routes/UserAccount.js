import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Auth from "../components/Auth/Auth";
import { AccountNav, AccountContent } from "../components/UserAccount";
import { selectUserToken } from "../store/slices/auth";

export default function UserAccount() {
  const [content, setContent] = useState(
    localStorage.getItem("clicked") || "Products"
  );
  const userToken = useSelector(selectUserToken);
  const isUserLoggedIn = userToken !== "";

  useEffect(() => {
    localStorage.setItem("clicked", content);
  }, [content]);

  const handleNavClick = (btn) => {
    setContent(btn);
  };

  return (
    <>
      {isUserLoggedIn ? (
        <div className="flex">
          <AccountNav onNavClick={handleNavClick} content={content} />
          <AccountContent content={content} />
        </div>
      ) : (
        <div className=" container h-full w-2/4">
          <Auth />
        </div>
      )}
    </>
  );
}
