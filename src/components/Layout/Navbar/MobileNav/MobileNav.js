import React from "react";
import UserSection from "./UserSection";
import { useSelector } from "react-redux";
import { loginSelector } from "../../../../store/slices/auth";
import Navlinks from "./Navlinks";
import LoginArea from "./LoginArea";
export default function MobileNav(props) {
  const isLogged = useSelector(loginSelector).status == "succeeded";
  return (
    <div className={`flex h-screen flex-col pb-16 ${!isLogged?"justify-between":""}`}>
      {isLogged && <UserSection />}
      <Navlinks setShowSidebar={props.setShowSidebar} />
      <LoginArea isLogged={isLogged}/>
    </div>
  );
}
