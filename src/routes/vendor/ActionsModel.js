import React from "react";
import { Modal } from "../../components/UI";
import AddProduct from "./AddProduct";

const ActionsModel = ({ actionType, showModel, setShow, ...item }) => {
  return (
    <Modal
      className="h-4/5 w-4/5 overflow-y-auto rounded-lg"
      show={showModel}
      setShow={setShow}
    >
      <AddProduct actionType={actionType} {...item} />
    </Modal>
  );
};

export default ActionsModel;
