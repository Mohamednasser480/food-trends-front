import React, { useEffect } from "react";
import {
  adminUsersSelector,
  getUsers,
  paginateUsers,
} from "../../store/slices/admin";
import { useDispatch, useSelector } from "react-redux";
import { Loader, Pagination } from "../../components/UI";
import Filters from "./Filters";
export default function Users() {
  const dispatch = useDispatch();
  const users = useSelector(adminUsersSelector).users;
  const usersCount = useSelector(adminUsersSelector).count;
  const currentPage = useSelector(adminUsersSelector).currentPage;
  const usersLoading = useSelector(adminUsersSelector).isLoading;
  const usersError = useSelector(adminUsersSelector).error;
  const usersFilters = useSelector(adminUsersSelector).filterObject;
  useEffect(() => {
    dispatch(getUsers(usersFilters));
  }, []);
  const changeUsersPerPage = (pageNumber) => {
    dispatch(paginateUsers({ pageNumber: pageNumber }));
  };
  function isUserDeleted(user) {
    if (
      user?.email.split(".")[user?.email.split(".").length - 1] == "deleted"
    ) {
      // return user?.email.split(".").slice(0, 2).join(".");
      return true;
    } else {
      return false;
    }
  }

  function emailWithoutDeleted(email) {
    // Need to remove just last 2
    // return email.split(".").slice(0, 2).join(".");
    let emailArr = email.split(".");
    return emailArr.slice(0, emailArr.length-2).join(".");
  }

  return usersError ? (
    <div className="flex h-full w-full items-center justify-center">
      <img src={require("../../assets/ServerError.png")} />
    </div>
  ) : (
    <section className="flex flex-col gap-2">
      <div className="py-1 px-1">
        <Filters />
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-primary text-xs uppercase text-white  dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-5">
                Image
              </th>
              <th scope="col" className="py-3 px-3">
                Username
              </th>
              <th scope="col" className="py-3 px-3">
                StoreName
              </th>
              <th scope="col" className="py-3 px-3">
                Email
              </th>
              <th scope="col" className="py-3 px-3">
                Mobile Number
              </th>
              <th scope="col" className="py-3 px-3">
                Address
              </th>
              <th scope="col" className="py-3 px-3">
                User Type
              </th>
              <th scope="col" className="py-3 px-3">
                Status
              </th>
              <th scope="col" className="py-3 px-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          {usersLoading ? (
            <Loader />
          ) : (
            <tbody>
              {users &&
                users.map((user, index) => {
                  return (
                    <tr
                      key={index}
                      className={`border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600 ${
                        isUserDeleted(user) ? "bg-red-100 hover:bg-red-200" : ""
                      }`}
                    >
                      <td className="py-3 px-4">
                        <img
                          src={user?.image}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                      </td>

                      <td className="py-3 px-3 capitalize">{user?.name}</td>
                      <td className="py-3 px-3 capitalize">
                        {user?.storeName}
                      </td>
                      <th
                        scope="row"
                        className="whitespace-nowrap py-3 px-2 font-medium text-gray-900 dark:text-white"
                      >
                        {/* {user?.email} */}
                        {isUserDeleted(user)
                          ? emailWithoutDeleted(user?.email)
                          : user?.email}
                      </th>
                      <td className="py-3 px-2">{user?.mobile}</td>
                      <td className="py-3 px-2 capitalize">{`${user?.address?.governorate} - ${user?.address?.city} `}</td>
                      <td className="py-3 px-3 capitalize">{user?.userType}</td>
                      <td
                        className={`py-3 px-3 font-bold capitalize ${
                          user?.verified == "pending"
                            ? "text-orange-400 "
                            : user?.verified == "true"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {user?.verified == "true"
                          ? "Verified"
                          : user?.verified == "false"
                          ? "Refused"
                          : "Pending"}
                      </td>
                      <td className=" py-3 px-1">
                        <div className="flex flex-col items-center  justify-center gap-2 px-3 ">
                          {(user?.verified == "false" ||
                            user?.verified == "pending") &&
                            user?.userType !== "customer" && (
                              <a
                                href="#"
                                className="rounded-lg bg-green-500  py-1 px-2 font-bold text-white transition-all  duration-300 hover:bg-green-700 dark:text-blue-500"
                              >
                                Approve
                              </a>
                            )}

                          {isUserDeleted(user) ? (
                            <span className="font-bold">Deleted</span>
                          ) : (
                            <a
                              href="#"
                              className="rounded-lg bg-red-500  py-1 px-4 font-bold text-white transition-all duration-300 hover:bg-red-700 dark:text-blue-500"
                            >
                              Delete
                            </a>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          )}
        </table>
      </div>
      <Pagination
        onPageChange={changeUsersPerPage}
        currentPage={currentPage}
        numberOfItems={usersCount}
        numberOfItemsToShow={8}
        className="bg-inherit"
      />
    </section>
  );
}
