import React, { useEffect, useState } from "react";
import { Button, DashboardPage, Loader, Modal, ProductRating } from "../../components/UI";
import { selectUserData } from "../../store/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchVendorProducts,
  vendorSelector,
  vendorStatusSelector,
} from "../../store/slices/vendor";
import ReviewDetail from "./ReviewDetail";
let i = 1;
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
              <th>Product</th>
              {/* <th>#</th> */}
              <th>Number of Reviews</th>
              <th>Average Rating</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {React.Children.toArray(
              vendorData.map((item, index) => {
                return item.numberOfReviews !== 0 ? (
                  <tr className="text-center">
                    <th className="capitalize">{item.productName}</th>
                    {/* <td>{index}</td> */}
                    <td>{item.numberOfReviews}</td>
                    <td className="flex justify-center items-center py-8">
                      {/* {(item.rate / item.numberOfReviews || 0).toFixed(2)} */}
                      <ProductRating rating={(item.rate / item.numberOfReviews || 0).toFixed(2)} className="text-2xl h-full" />
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
                ) : (
                  ""
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