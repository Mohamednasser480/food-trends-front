import React, { useEffect, useState } from 'react';
import { Typography, Search, Loader } from '../UI';
import { Checkbox, Radio, Select } from '../UI/Form';
import { CompactTable, SearchBar, Modal, ProductRating } from '../UI';
import { selectUserData, selectUserToken } from '../../store/slices/auth';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { register } from 'react-scroll/modules/mixins/scroller';

const headers = ['product', 'number of reviews', 'average rate'];
const filterOptions = ['high to low', 'low to high'];
let idTogetreview;

export default function Reviews() {
  const [products, setProducts] = useState([]);
  const [productReviews, setProductReviews] = useState([]);
  const [ratingValue, setRatingValue] = useState(null);
  const [showReviews, setShowReviews] = useState(false);
  const [status, setStatus] = useState('idle');

  const { userType, _id } = useSelector(selectUserData);
  const token = useSelector(selectUserToken);
  // console.log(productReviews);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({});

  //------------------- Vendor reviews ------------------//
  useEffect(() => {
    const url = `https://food-trends-api.herokuapp.com/api/v1/vendor/${_id}`;
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setProducts(json.data);
    };
    fetchData();
  }, []);

  // get product id to fetch all this particular product reviews
  const getProductId = (id) => {
    const url = `https://food-trends-api.herokuapp.com/api/v1/products/${id}/reviews`;
    const fetchReviews = async () => {
      setStatus('loading');
      const response = await fetch(url);
      const json = await response.json();
      setStatus('succeeded');
      setProductReviews(json.data);
    };
    idTogetreview = id;
    console.log(idTogetreview);

    fetchReviews();
    setShowReviews(true);
  };

  //--------------Vendor Filters---------------//
  // search vendor reviews

  const handleSearch = async (e) => {
    e.preventDefault();
    const url = `https://food-trends-api.herokuapp.com/api/v1/products/${_id}/reviews`;
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  };

  const handleRatingFilter = (e) => {
    setRatingValue(e.target.value);
  };

  useEffect(() => {
    // const id = getProductId();
    // console.log(id);
    let url = `https://food-trends-api.herokuapp.com/api/v1/products/${idTogetreview}/reviews?`;

    if (ratingValue == 1) url += 'min_rate=0&max_rate=1';
    else if (ratingValue == 2) url += 'min_rate=1&max_rate=2';
    else if (ratingValue == 3) url += 'min_rate=2&max_rate=3';
    else if (ratingValue == 4) url += 'min_rate=3&max_rate=4';
    else if (ratingValue == 5) url += 'min_rate=4&max_rate=5';

    console.log(url);
    const fetchData = async () => {
      const response = await axios.get(url, {
        headers: { Authorization: 'Bearer ' + token },
      });

      const json = response.data;
      setProductReviews(json.data);
    };
    fetchData();
  }, [ratingValue]);

  // console.log(ratingValue);

  const reviews = {
    vendor: () => {
      return (
        <>
          <div className="overflow-x-auto bg-[#f8f9fa] p-10">
            <Typography component={'h3'} className="tracking-tight text-primary">
              Your Reviews
            </Typography>
            <div className="flex w-full gap-x-6">
              <CompactTable
                products={products}
                headers={headers}
                buttonContent="see details"
                onButtonClick={getProductId}
              />
            </div>
          </div>
          <Modal show={showReviews} setShow={setShowReviews} className="w-[1200px] overflow-y-auto">
            {showReviews && (
              <div className="w-full ">
                <div className="flex w-full items-center gap-x-5 p-3">
                  <Search onClick={handleSearch} />
                  <div className="w-1/5 justify-self-end">
                    <select className="w-full justify-self-end" onChange={handleRatingFilter}>
                      <option defaultChecked>Filter by rating</option>
                      <option value={1}> {'>'} 1</option>
                      <option value={2}>1 - 2</option>
                      <option value={3}>2 - 3</option>
                      <option value={4}>3 - 4</option>
                      <option value={5}>4 - 5</option>
                    </select>
                  </div>
                </div>
                <div className="flex w-full">
                  <div className="w-full">
                    <div className="flex h-12 items-center bg-primary p-2 text-center font-medium text-white">
                      <p className="w-10"></p>
                      <p className="w-32 break-words">Title</p>
                      <p className="mx-5 w-96">Comment</p>
                      <p className="w-32">Customer</p>
                      <p className="mr-5 w-32">Date</p>
                      <p className="w-32">Rate</p>
                    </div>

                    {status == 'loading' ? (
                      <Loader />
                    ) : status == 'succeeded' ? (
                      productReviews.map((rev, index) => {
                        return (
                          <div className="flex w-full items-center border-b p-2" key={index}>
                            <p className="w-10 font-medium">{index + 1}</p>
                            <p className="w-32 break-words">{rev.title}</p>
                            <p className="mx-5 w-96">{rev.comment}</p>
                            {/* <p className="w-32">{rev.customer.name}</p> */}
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
                      })
                    ) : null}
                  </div>
                </div>
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
