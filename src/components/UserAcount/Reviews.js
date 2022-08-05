import React, { useEffect, useState } from 'react';
import { Typography } from '../UI';
import Checkbox from '../UI/Form/Checkbox';
import { CompactTable, SearchBar, Modal, ProductRating } from '../UI';

const userType = 'vendor';

const headers = ['product', 'customer', 'rate', 'date'];

export default function Reviews() {
  const [userData, setUserData] = useState([]);
  const [ratingValue, setRatingValue] = useState(0);
  const [currentCustomer, setCurrentCustomer] = useState(null);

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users';

    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setUserData(json);
    };

    fetchData();
  }, []);

  const getRatingValue = (value) => {
    setRatingValue(value);
    console.log(ratingValue);
  };

  const getCustomerId = (id) => {
    console.log(id);
    let customer = userData.find((el) => el.id === id);
    setCurrentCustomer(customer);
  };

  console.log(currentCustomer);
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
                  userData={userData}
                  headers={headers}
                  buttonContent="details"
                  onButtonClick={getCustomerId}
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
          <Modal show={currentCustomer} setShow={setCurrentCustomer}>
            {currentCustomer && (
              <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                  <h2 class="card-title">{currentCustomer.name}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
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
