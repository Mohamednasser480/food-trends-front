import React, { useEffect, useState } from "react";
import { Button, DashboardPage, Loader, Modal } from "../../components/UI";
import { selectUserData } from "../../store/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchVendorProducts,
  vendorSelector,
  vendorStatusSelector,
} from "../../store/slices/vendor";
import ReviewDetail from "./ReviewDetail";

const Reviews = () => {
  const { _id } = useSelector(selectUserData);
  const vendorData = useSelector(vendorSelector);
  const vendorStatus = useSelector(vendorStatusSelector);
  const [productId, setProductId] = useState(0);
  const [modelState, setModelState] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVendorProducts(_id));
  }, []);

  const getDetails = (id) => {
    setModelState(true);
    setProductId(id);
  };

  return (
    <DashboardPage title="your reviews">
      {vendorStatus === "Pending" ? <Loader /> : null}
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className="bg-lime-700">
            <tr className="text-center">
              <th>#</th>
              <th>Product</th>
              <th>Number of Reviews</th>
              <th>Average Rating</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {React.Children.toArray(
              vendorData.map((item, index) => {
                return (
                  <tr className=" text-center">
                    <th>{index + 1}</th>
                    <td>{item.productName}</td>
                    <td>{item.numberOfReviews}</td>
                    <td>
                      {(item.rate / item.numberOfReviews || 0).toFixed(2)}
                    </td>
                    <td>
                      <Button
                        onClick={() => {
                          getDetails(item._id);
                        }}
                        variant={"primary"}
                      >
                        Details
                      </Button>
                    </td>
                  </tr>
                );
              })
            )}

            <Modal
              show={modelState}
              setShow={setModelState}
              className=" h-fit w-full rounded-xl"
            >
              <ReviewDetail productId={productId} />
            </Modal>
          </tbody>
        </table>
      </div>
    </DashboardPage>
  );
};

export default Reviews;
