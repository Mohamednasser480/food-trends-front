import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../../store/slices/auth";
import Auth from "../../../Auth/Auth";
import { Button, Modal } from "../../../UI";

export default function LoginArea({ isLogged }) {
  const [showModal, setShowModal] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const dispatch = useDispatch(logout);
  return (
    <div className="flex flex-1 flex-col justify-end gap-3">
      {isLogged ? (
        <Button
          variant="secondary"
          className="w-full"
          onClick={() => {
            dispatch(logout());
          }}
        >
          Logout
        </Button>
      ) : (
        <>
          <Button
            variant="secondary"
            className="w-full"
            onClick={() => {
              setShowModal(true);
              setShowRegister(false);
            }}
          >
            Login
          </Button>
          <Button
            variant="primary"
            className="w-full"
            onClick={() => {
              setShowRegister(true);
              setShowModal(true);
            }}
          >
            Register
          </Button>
          <Modal
            show={showModal}
            setShow={setShowModal}
            className="h-full w-full"
          >
            <Auth showRegister={showRegister} />
          </Modal>
        </>
      )}
    </div>
  );
}
