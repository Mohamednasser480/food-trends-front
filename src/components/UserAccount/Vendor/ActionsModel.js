import React from "react";
import { Modal } from "../../UI";
import AddProduct from "./ActionProducts";

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
