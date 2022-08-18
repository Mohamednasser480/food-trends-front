import React, { useState, useEffect, useRef } from "react";
import { Button, DashboardPage, Loader, Typography } from "../../components/UI";
import Radio from "../../components/UI/Form/Radio";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchVendorOrders,
  filteredOrdersSelector,
  ordersSelector,
  vendorStatusSelector,
} from "../../store/slices/vendor";

const filters = ["all", "completed", "pending"];
const Orders = () => {
  const [selected, setSelected] = useState("");
  const filtersObj = useSelector(filteredOrdersSelector);
  const filteredData = useSelector(ordersSelector);
  const status = useSelector(vendorStatusSelector);
  const stateOfOrders = useRef("");
  const [indexBtn, setIndexBtn] = useState(0);
  const dispatch = useDispatch();

  let filter = {
    ...filtersObj,
  };

  // order status filter onchange function
  const handleOrderStatFilter = (ordersStatus, index) => {
    setIndexBtn(index);
    filter.prices = selected;
    filter.orderStatus = ordersStatus;
    stateOfOrders.current = ordersStatus;
    dispatch(fetchVendorOrders(filter));
  };

  const badgeColor = (status) => {
    return status === "pending"
      ? "badge-warning"
      : status === "completed"
      ? "badge-success"
      : status === "cancelled"
      ? "badge-error"
      : "badge-info";
  };

  // fetching VENDOR orders by products sorted based on price and status
  useEffect(() => {
    filter.prices = selected;
    filter.orderStatus = stateOfOrders.current;
    dispatch(fetchVendorOrders(filter));
  }, [dispatch, selected]);

  return (
    <>
      {status === "Pending" ? <Loader /> : null}
      <DashboardPage title="Orders">
        <div className=" container m-2 flex flex-row">
          <div className="my-auto">
            {filters.map((filter, index) => {
              return (
                <Button
                  variant="user-account"
                  className={`m-2 w-28 capitalize hover:bg-primary ${
                    indexBtn == index ? "!bg-primary !text-white" : ""
                  }`}
                  key={index}
                  onClick={(e) => handleOrderStatFilter(e.target.value, index)}
                  value={filter}
                  disabled={indexBtn == index && true}
                >
                  {filter}
                </Button>
              );
            })}
          </div>

          <div className=" mx-auto flex flex-wrap items-center justify-center">
            <Typography component="subtitle2">Price filters:</Typography>
            <div className="flex flex-col p-2 md:flex-row">
              <Radio
                name="price"
                value="highest"
                checked={selected}
                onChange={(e) => {
                  setSelected(e.target.value);
                }}
              >
                Highest
              </Radio>
              <Radio
                name="price"
                checked={selected}
                onChange={(e) => {
                  setSelected(e.target.value);
                }}
                value="lowest"
              >
                Lowest
              </Radio>
            </div>
          </div>
        </div>
      </DashboardPage>
      {!filteredData.length ? (
        <div className=" text-center">No Orders Yet</div>
      ) : (
        <DashboardPage>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead className="bg-lime-700">
                <tr className="text-center">
                  <th>Customer</th>
                  <th>Order Status</th>
                  <th>Order Date</th>
                  <th>Delivery Date</th>
                  <th>Total Price</th>
                  {/* <th>Payment Method</th> */}
                </tr>
              </thead>
              <tbody>
                {React.Children.toArray(
                  filteredData.map((item) => {
                    return (
                      <tr className=" text-center capitalize">
                        <th>{item.customer?.name || "Deleted User"}</th>
                        <th>
                          <div
                            className={`badge p-3 text-white ${badgeColor(
                              item.status
                            )}`}
                          >
                            {item.status}
                          </div>
                        </th>
                        <th>
                          {new Date(item?.createdAt).toLocaleDateString()}
                        </th>
                        <th>
                          {new Date(
                            item?.expectedDeliveryDate
                          ).toLocaleDateString()}
                        </th>
                        <th>{item.totalPrice.toFixed(2)} EGP</th>
                        <th></th>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </DashboardPage>
      )}
    </>
  );
};

export default Orders;