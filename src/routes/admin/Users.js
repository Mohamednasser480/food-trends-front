import React, { useEffect } from "react";
import {
  adminUsersSelector,
  getUsers,
  paginateUsers,
} from "../../store/slices/admin";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "../../components/UI";
export default function Users() {
  const dispatch = useDispatch();
  const users = useSelector(adminUsersSelector).users;
  const usersCount = useSelector(adminUsersSelector).count;
  const currentPage = useSelector(adminUsersSelector).currentPage;
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const changeUsersPerPage = (pageNumber) => {
    dispatch(paginateUsers({ pageNumber: pageNumber }));
  };
  return (
    <section className="">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-primary text-xs uppercase text-white  dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-4">
                Image
              </th>
              <th scope="col" className="py-3 px-6">
                Username
              </th>
              <th scope="col" className="py-3 px-6">
                StoreName
              </th>
              <th scope="col" className="py-3 px-6">
                Email
              </th>
              <th scope="col" className="py-3 px-6">
                Mobile Number
              </th>
              <th scope="col" className="py-3 px-6">
                Address
              </th>
              <th scope="col" className="py-3 px-6">
                User Type
              </th>
              <th scope="col" className="py-3 px-6">
                Status
              </th>
              <th scope="col" className="py-3 px-6">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user, index) => {
                return (
                  <tr
                    key={index}
                    className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
                  >
                    <td className="py-4 px-4">
                      <img
                        src={user?.image}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                    </td>

                    <td className="py-4 px-6 capitalize">{user?.name}</td>
                    <td className="py-4 px-6 capitalize">{user?.storeName}</td>
                    <th
                      scope="row"
                      className="whitespace-nowrap py-4 px-2 font-medium text-gray-900 dark:text-white"
                    >
                      {user?.email}
                    </th>
                    <td className="py-4 px-2">{user?.mobile}</td>
                    <td className="py-4 px-2 capitalize">{`${user?.address?.governorate} - ${user?.address?.city} `}</td>
                    <td className="py-4 px-6 capitalize">{user?.userType}</td>
                    <td
                      className={`py-4 px-6 font-bold capitalize ${
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
                    <td className=" py-4 px-1">
                      <div className="flex flex-col items-center  justify-center gap-2 px-3 ">
                        {(user?.verified == "false" ||
                          user?.verified == "pending") &&
                          user?.userType !== "customer" && (
                            <a
                              href="#"
                              className="rounded-lg bg-green-500  py-1 px-2 font-bold text-white transition-all  duration-300 hover:bg-green-700 dark:text-blue-500"
                            >
                              Verify
                            </a>
                          )}
                        <a
                          href="#"
                          className="rounded-lg bg-red-500  py-1 px-2 font-bold text-white transition-all duration-300 hover:bg-red-700 dark:text-blue-500"
                        >
                          Delete
                        </a>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <Pagination
        onPageChange={changeUsersPerPage}
        currentPage={currentPage}
        numberOfItems={usersCount}
        numberOfItemsToShow={8}
      />
    </section>
  );
}
