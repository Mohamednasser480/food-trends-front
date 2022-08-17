import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Alert, Modal } from "../../UI";
import Auth from "../../Auth/Auth";
import { useSelector } from "react-redux";
import {
  selectUserData,
  selectUserToken,
  // selectError,
  selectStatus,
} from "../../../store/slices/auth";
import { UserMenu } from "./index";

const UserProfile = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const userToken = useSelector(selectUserToken);
  const userData = useSelector(selectUserData);
  // const userError = useSelector(selectError);
  const userStatus = useSelector(selectStatus);
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
        {showMenu ? <UserMenu onClick={() => setShowMenu(false)} /> : null}
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
            className="h-[690px] w-[420px] rounded-xl"
          >
            {/* {userStatus == 'error' ? <Alert>{userError}</Alert> : null} */}

            <Auth setShowModal={setShowLoginModal} />
          </Modal>
        ) : null}
      </>
    ),
  };

  return isUserLoggedIn ? render.userLoggedIn : render.userNotLoggedIn;
};

export default UserProfile;
