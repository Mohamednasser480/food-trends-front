import React, { useRef } from "react";
import SelectBox from "../../components/Shop/SelectBox";
import { useDispatch, useSelector } from "react-redux";
import { adminUsersSelector, getUsers } from "../../store/slices/admin";
import { Button } from "react-scroll";

export default function Filters() {
  const dispatch = useDispatch();
  const filters = useSelector(adminUsersSelector).filterObject;
  const userStatusRef = useRef();
  const userTypeRef = useRef();
  const searchRef = useRef();
  const statusArray = [
    {
      text: "All Users",
      value: "",
    },
    {
      text: "Active",
      value: "true",
    },
    {
      text: "Pending",
      value: "pending",
    },
    {
      text: "Refused",
      value: "false",
    },
  ];
  const userTypeArray = [
    {
      text: "All Users",
      value: "",
    },
    {
      text: "Customers",
      value: "customer",
    },
    {
      text: "Vendor",
      value: "vendor",
    },
    {
      text: "Delivery",
      value: "delivery",
    },
  ];

  // let filtersPayload = { name: "", verified: "" };

  const onChangeHandler = () => {
    dispatch(
      getUsers({
        name: searchRef.current.value,
        verified: userStatusRef.current.value,
        userType: userTypeRef.current.value,
      })
    );
  };

  const onSearch = () => {
    dispatch(
      getUsers({
        name: searchRef.current.value,
        verified: userStatusRef.current.value,
        userType: userTypeRef.current.value,
      })
    );
  };

  const resetFilters = () => {
    searchRef.current.value = "";
    userStatusRef.current.value = "";
    userTypeRef.current.value = "";
    dispatch(
      getUsers({
        name: searchRef.current.value,
        verified: userStatusRef.current.value,
        userType: userTypeRef.current.value,
      })
    );
  };

  return (
    <div className="flex w-full items-center gap-6 rounded-lg bg-white p-5 shadow">
      <div className="relative w-1/4">
        <div className="absolute ml-2 flex h-full items-center">
          <svg
            className="text-primary-gray-dark h-4 w-4 fill-current"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z"></path>
          </svg>
        </div>

        <div className="flex gap-9">
          <input
            ref={searchRef}
            type="text"
            placeholder="Search by Username"
            className="w-full rounded-md border-transparent bg-gray-100 px-8 py-3 text-sm focus:border-gray-500 focus:bg-white focus:ring-0"
          />
        </div>
      </div>
      <button
        onClick={onSearch}
        className="rounded-md bg-primary px-4 py-2 font-sans font-medium text-white transition-all duration-300 hover:bg-secondary-400 hover:text-black focus:bg-secondary-400 focus:text-black"
      >
        Search
      </button>
      <div className=" flex items-center gap-4">
        <h4 className="font-bold">Filter by user status</h4>
        <SelectBox
          array={statusArray}
          onChange={onChangeHandler}
          ref={userStatusRef}
        />
      </div>
      <div className=" flex items-center gap-4">
        <h4 className="font-bold">Filter by user type</h4>
        <SelectBox
          array={userTypeArray}
          onChange={onChangeHandler}
          ref={userTypeRef}
        />
      </div>
      <button
        onClick={resetFilters}
        className="rounded-md bg-secondary-400 px-4 py-2 font-sans font-medium text-black transition-all duration-300 hover:text-black hover:opacity-80 focus:bg-secondary-400 focus:text-black"
      >
        Reset
      </button>
    </div>
  );
}
