import React from 'react';

const CompactTable = ({ products, headers, buttonContent, onButtonClick }) => {
  console.log(products);
  return (
    <div className="flex flex-1 flex-col rounded-xl bg-white py-10">
      <div className="self-center ">
        <div className="flex h-12 items-center bg-primary p-2 text-center font-medium text-white">
          <p className="w-10"></p>
          <p className="w-48">Product</p>
          <p className="w-48">Number of reviews</p>
          <p className="w-32">Average rating</p>
          <p className="w-32"></p>
        </div>
        {products.map((product, index) => {
          return (
            <div className="flex items-center border-b p-2 text-center" key={index}>
              <p className="w-10 font-medium">{index + 1}</p>
              <p className="w-48 break-words">{product.productName}</p>
              <p className="w-48">{product.numberOfReviews}</p>
              <p className="w-32">{(product.rate / product.numberOfReviews || 0).toFixed(2)}</p>
              <button
                onClick={() => onButtonClick(product._id)}
                className="justify-self-end rounded-xl bg-primary p-3 text-white hover:bg-secondary-400 hover:text-black"
              >
                Details
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompactTable;
