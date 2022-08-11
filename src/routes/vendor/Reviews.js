import React, { useEffect, useState } from 'react';
import { CompactTable, Typography } from '../../components/UI';
import { selectUserData, selectUserToken } from '../../store/slices/auth';
import { useSelector } from 'react-redux';
import axios from 'axios';

const headers = ['product', 'number of reviews', 'average rate'];

const Reviews = () => {
  const [products, setProducts] = useState([]);
  const { _id } = useSelector(selectUserData);
  const token = useSelector(selectUserToken);

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
  // const getProductId = (id) => {
  //   const url = `https://food-trends-api.herokuapp.com/api/v1/products/${id}/reviews`;
  //   const fetchReviews = async () => {
  //     setStatus('loading');
  //     const response = await fetch(url);
  //     const json = await response.json();
  //     setStatus('succeeded');
  //     setProductReviews(json.data);
  //   };
  //   idTogetreview = id;
  //   console.log(idTogetreview);

  //   fetchReviews();
  //   setShowReviews(true);
  // };

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

  // console.log(ratingValue);

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
            // onButtonClick={getProductId}
          />
        </div>
      </div>
    </>
  );
};

export default Reviews;
