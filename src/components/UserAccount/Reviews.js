import React, { useEffect, useState } from 'react';
import { Typography } from '../UI';
import { Checkbox, Radio } from '../UI/Form';
import { CompactTable, SearchBar, Modal, ProductRating } from '../UI';
import { selectUserData } from '../../store/slices/auth';
import { useSelector } from 'react-redux';

const headers = ['product', 'number of reviews', 'average rate'];

export default function Reviews() {
  const [products, setProducts] = useState([]);
  const [productReviews, setProductReviews] = useState([]);
  const [ratingValue, setRatingValue] = useState(null);
  const [showReviews, setShowReviews] = useState(false);

  const { userType, _id } = useSelector(selectUserData);
  // console.log(useSelector(selectUserData));
  useEffect(() => {
    const url = `http://localhost:3000/api/v1/vendor/${_id}`;
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setProducts(json);
    };

    fetchData();
  }, []);

  const getRatingValue = (e) => {
    setRatingValue(e.target.value);
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
                  buttonContent="see details"
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
                      <Radio
                        type="radio"
                        name="rate"
                        className="my-1"
                        onChange={getRatingValue}
                        checked={ratingValue}
                        value={index + 1}
                      >
                        <ProductRating editable={false} rating={index + 1} />
                      </Radio>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <Modal
            show={showReviews}
            setShow={setShowReviews}
            className="h-[500px] w-[1000px] overflow-y-auto rounded-lg"
          >
            {showReviews && (
              <div className="w-full ">
                <div className="flex h-12 items-center bg-primary p-2 text-center font-medium text-white">
                  <p className="w-10"></p>
                  <p className="w-32 break-words">Title</p>
                  <p className="mx-5 w-96">Comment</p>
                  <p className="w-32">Customer</p>
                  <p className="mr-5 w-32">Date</p>
                  <p className="w-32">Rate</p>
                </div>

                {productReviews.map((rev, index) => {
                  return (
                    <div className="flex w-full items-center border-b p-2" key={index}>
                      <p className="w-10 font-medium">{index + 1}</p>
                      <p className="w-32 break-words">{rev.title}</p>
                      <p className="mx-5 w-96">{rev.comment}</p>
                      <p className="w-32">{rev.customer.name}</p>
                      <p className="mr-5 w-32">{rev.createdAt}</p>
                      <p className="w-32">
                        <ProductRating
                          rating={rev.rating}
                          editable={false}
                          className="justify-center"
                        />
                      </p>
                    </div>
                  );
                })}
              </div>
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
