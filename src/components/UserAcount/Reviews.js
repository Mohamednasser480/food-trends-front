import React, { useEffect, useState } from 'react';
import { Typography } from '../UI';
import Checkbox from '../UI/Form/Checkbox';
import { CompactTable, SearchBar, Modal, ProductRating } from '../UI';

const userType = 'vendor';

const headers = ['product', 'number of reviews', 'average rate'];

export default function Reviews() {
  const [products, setProducts] = useState([]);
  const [productReviews, setProductReviews] = useState([]);
  const [ratingValue, setRatingValue] = useState(0);
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    const url = 'http://localhost:3000/api/v1/vendor/62ed27f4539b5574cab3f202';
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setProducts(json);
    };

    fetchData();
  }, []);

  const getRatingValue = (value) => {
    setRatingValue(value);
    console.log(ratingValue);
  };

  const getProductId = (id) => {
    const url = `http://localhost:3000/api/v1/products/${id}/reviews`;
    const fetchReviews = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setProductReviews(json);
    };
    fetchReviews();
    console.log(id);
    console.log(productReviews);
    setShowReviews(true);
  };

  const reviews = {
    vendor: () => {
      return (
        <>
          <div className="overflow-x-auto bg-[#f8f9fa] p-10">
            <Typography component={'h3'} className="tracking-tight text-primary">
              Your Reviews
            </Typography>
            <div className="flex gap-x-6">
              <div className="flex-1 rounded-xl bg-white p-5">
                <CompactTable
                  products={products}
                  headers={headers}
                  buttonContent="details"
                  onButtonClick={getProductId}
                />
              </div>

              <div className="flex w-3/12 flex-col rounded-xl bg-white">
                <Typography component="h6" className="p-5">
                  Filters
                </Typography>
                <SearchBar />

                <div className="w-10 p-3">
                  {[...Array(5)].map((filter, index) => {
                    return (
                      <Checkbox key={index} label={filter}>
                        <ProductRating
                          editable={false}
                          rating={index + 1}
                          onClick={getRatingValue}
                        />
                      </Checkbox>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <Modal show={showReviews} setShow={setShowReviews} className="h-[800px] w-[1200px]">
            {showReviews && (
              <table class="table-compact table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Title</th>
                    <th>Comment</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Rate</th>
                  </tr>
                </thead>
                {productReviews.map((rev, index) => {
                  return (
                    <tbody key={index}>
                      <tr>
                        <th>{index + 1}</th>
                        <td>
                          <Typography component={'subtitle2'} className="tracking-tight">
                            {rev.title}
                          </Typography>
                        </td>
                        <td className="">
                          <Typography component={'body2'} className="tracking-tight !text-black">
                            {rev.comment}
                          </Typography>
                        </td>
                        <td>{rev.customer.name}</td>
                        <td>{rev.createdAt}</td>
                        <td>
                          <ProductRating
                            rating={rev.rating}
                            editable={false}
                            className="justify-center"
                          />
                        </td>
                      </tr>
                    </tbody>
                  );
                })}

                <tfoot>
                  <tr>
                    <th></th>
                    <th>Title</th>
                    <th>Comment</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Rate</th>
                  </tr>
                </tfoot>
              </table>
            )}
          </Modal>
        </>
      );
    },
    customer: () => {
      // return userData.map((user) => <div key={user.id}>{user.id}</div>);
    },
    delivery: () => {
      return <div>delivery</div>;
    },
  };

  return reviews[userType] ? reviews[userType]() : null;
}
