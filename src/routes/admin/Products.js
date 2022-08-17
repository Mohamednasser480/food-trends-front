import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader, Pagination } from "../../components/UI";
import Filters from "./Filters";
import {
  adminProductsSelector,
  paginateProducts,
} from "../../store/slices/adminProducts";
import { getProducts } from "../../store/slices/adminProducts";

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector(adminProductsSelector).products;
  const productsCount = useSelector(adminProductsSelector).count;
  const currentPage = useSelector(adminProductsSelector).currentPage;
  const productsLoading = useSelector(adminProductsSelector).isLoading;
  const productsError = useSelector(adminProductsSelector).error;
  const productsFilters = useSelector(adminProductsSelector).filterObject;

  useEffect(() => {
    dispatch(getProducts(productsFilters));
  }, []);
  const changeProductsPerPage = (pageNumber) => {
    dispatch(paginateProducts({ pageNumber: pageNumber }));
  };

  return productsError ? (
    <div className="flex h-full w-full items-center justify-center">
      <img src={require("../../assets/ServerError.png")} />
    </div>
  ) : (
    <section className="flex flex-col gap-2">
      <div className="py-1 px-1">{/* <Filters /> */}</div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-primary text-xs uppercase text-white  dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-3">
                Image
              </th>
              <th scope="col" className="py-3 px-3">
                Item Name
              </th>
              <th scope="col" className="py-3 px-3">
                Price
              </th>
              <th scope="col" className="py-3 px-3">
                Description
              </th>
              <th scope="col" className="py-3 px-3">
                In Stock
              </th>
              <th scope="col" className="py-3 px-3">
                Vendor
              </th>
              <th scope="col" className="py-3 px-3">
                Status
              </th>
              <th scope="col" className="py-3 px-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          {productsLoading ? (
            <Loader />
          ) : (
            <tbody>
              {products &&
                products.map((product, index) => {
                  return (
                    <tr
                      key={index}
                      className={`border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600 ${
                        !product?.available ? "bg-red-100 hover:bg-red-200" : ""
                      }`}
                    >
                      <td className="py-1 px-4">
                        <img
                          src={product?.images[0]}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                      </td>

                      <td className="py-1 px-3 capitalize">
                        {product?.productName}
                      </td>

                      <td className="py-1 px-2 font-bold">
                        {product?.price} LE
                      </td>

                      <td className="w-6/12 py-1 px-3 capitalize">
                        {product?.summary}
                      </td>

                      <td className="py-1 px-5 font-bold capitalize text-black">
                        {product?.inStock || "-"}
                      </td>
                      <td className="py-1 px-3 capitalize">
                        {product?.vendor.slice(0, 5)}
                      </td>
                      <td className="py-1 px-3 capitalize">
                        {product?.productName}
                      </td>
                      <td className="py-1 px-3 capitalize">
                        {product?.productName}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          )}
        </table>
      </div>
      <Pagination
        onPageChange={changeProductsPerPage}
        currentPage={currentPage}
        numberOfItems={productsCount}
        numberOfItemsToShow={8}
        className="bg-inherit"
      />
    </section>
  );
}
