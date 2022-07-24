import React from 'react';
import { Typography } from '../UI';

export default function FreshItem({ title, image, desc }) {
  return (
    <div className="w-full text-center sm:w-[270px]">
      <img src={require('../../assets' + image)} alt="" className="m-auto pb-4" />
      <Typography component={'subtitle2'} className="my-5 font-semibold">
        {title}
      </Typography>
      <Typography component={'body2'}>{desc}</Typography>
    </div>
  );
}
