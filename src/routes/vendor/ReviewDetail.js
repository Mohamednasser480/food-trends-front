import axios from 'axios';
import { useEffect, useState } from 'react';
import { Search, Loader, ProductRating } from '../../components/UI';
import { useSelector } from 'react-redux';
import { selectUserData, selectUserToken } from '../../store/slices/auth';
let idTogetreview;
const filterOptions = ['high to low', 'low to high'];
const ReviewDetail = () => {
  const [status, setStatus] = useState('idle');
  const [ratingValue, setRatingValue] = useState(null);
  const [productReviews, setProductReviews] = useState([]);

  const token = useSelector(selectUserToken);

  useEffect(() => {
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

  //--------- Filters -------------/
  const handleRatingFilter = (e) => {
    setRatingValue(e.target.value);
  };

  const handleSearch = () => {};

  return (
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
  );
};

export default ReviewDetail;
