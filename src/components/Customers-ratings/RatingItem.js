import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import Rating from 'react-rating';
import { Typography } from '../UI';

const RatingItem = ({ name, desc, rating, city, img }) => {
  return (
    <div className=" container m-4 flex min-h-[400px] w-[400px] flex-col bg-[#FAF5E9] p-9">
      <Rating
        readonly
        className="pb-4"
        initialRating={rating}
        emptySymbol={<AiFillStar size={20} color="#b7b7b7" />}
        fullSymbol={<AiFillStar size={20} color="#EEB31A" />}
      />

      <Typography component={'body1'} className={'text-start !text-primary'}>
        {desc}
      </Typography>

      <div className="flex h-full items-end gap-4">
        <img className="h-16 w-16 object-cover" src={img} alt={name} />
        <div className="flex h-16 w-fit flex-col">
          <Typography component={'subtitle2'} className={'uppercase'}>
            {name}
          </Typography>
          <Typography component={'body2'} className={'!text-sm text-primary'}>
            {city}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default RatingItem;
