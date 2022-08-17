import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader, Pagination } from "../../components/UI";
import {
  adminProductsSelector,
  paginateProducts,
} from "../../store/slices/adminProducts";
import { getProducts } from "../../store/slices/adminProducts";
import ApproveButton from "./ProductsButtons/ApproveButton";
import DeleteButton from "./ProductsButtons/DeleteButton";
import DeactivateButton from "./ProductsButtons/DeactivateButton";
import ProductsFilters from "./ProductsFilters";
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
      <div className="py-1 px-1">
        <ProductsFilters />
      </div>
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
                      className={`border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600`}
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
                        {product?.inStock || "Out of Stock"}
                      </td>
                      <td className="py-1 px-3 capitalize">
                        {product?.vendor?.name}
                      </td>
                      <td
                        className={`py-1 px-3 font-bold capitalize  ${
                          product?.available == "true"
                            ? "text-green-500"
                            : product?.available == "pending"
                            ? "text-orange-400 "
                            : "text-red-500 "
                        }`}
                      >
                        {product?.available == "true"
                          ? "Verified"
                          : product?.available == "pending"
                          ? "Pending"
                          : "Refused"}
                      </td>
                      <td className="py-1 px-3 capitalize">
                        <div className="flex flex-col items-center  justify-center gap-2 px-3 ">
                          {product.available == "true" ? (
                            <DeactivateButton productId={product._id} />
                          ) : product.available == "pending" ? (
                            <ApproveButton productId={product._id} />
                          ) : (
                            "Refused"
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
        onPageChange={changeProductsPerPage}
        currentPage={currentPage}
        numberOfItems={productsCount}
        numberOfItemsToShow={10}
        className="bg-inherit"
      />
    </section>
  );
}
