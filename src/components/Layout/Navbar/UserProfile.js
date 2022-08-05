import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Modal } from "../../UI";
import Auth from "../../Auth/Auth";
import { useSelector } from "react-redux";
import { selectUserData, selectUserToken } from "../../../store/slices/auth";
import { UserMenu } from "./index";

const UserProfile = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const userToken = useSelector(selectUserToken);
  const userData = useSelector(selectUserData);
  const isUserLoggedIn = userToken !== "";

  const showMenuHandler = () => setShowMenu((showMenu) => !showMenu);

  const render = {
    userLoggedIn: (
      <div className="relative">
        <button onClick={showMenuHandler} className="h-10 w-10 rounded-full">
          <img
            className="h-full w-full"
            src={userData.image}
            alt={userData.name}
          />
        </button>
        {showMenu ? <UserMenu /> : null}
      </div>
    ),
    userNotLoggedIn: (
      <>
        <AiOutlineUser
          size={25}
          cursor={"pointer"}
          className={"transition-all hover:text-green-800"}
          onClick={() => setShowLoginModal(true)}
        />

        {showLoginModal ? (
          <Modal
            show={showLoginModal}
            setShow={setShowLoginModal}
            className="h-2/3 rounded-xl lg:w-1/4"
          >
            <Auth />
          </Modal>
        ) : null}
      </>
    ),
  };

  return isUserLoggedIn ? render.userLoggedIn : render.userNotLoggedIn;
};

export default UserProfile;