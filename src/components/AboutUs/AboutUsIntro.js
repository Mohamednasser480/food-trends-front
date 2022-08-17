import React from 'react';
import { Typography } from '../UI';

export default function AboutUsIntro() {
  return (
    <div className="container mb-28 max-w-7xl px-12">
      <Typography component={'h3'} className="py-10 text-center text-primary">
        {' '}
        SURPRISE, IT’S ALL ORGANIC
      </Typography>

      <div className="grid text-center md:grid-cols-2 md:text-left">
        <img src={require('../../assets/about1_01.jpg')} alt="" className="" />

        <div className="w-full md:pl-28">
          <Typography component={'subtitle1'} className="mt-12">
            Real food – Real Health
          </Typography>
          <Typography component={'h2'} className="py-8 !tracking-normal text-primary xl:text-7.5xl">
            HEALTHIER YOU EAT, HEALTHIER YOU LIVE
          </Typography>
          <Typography
            component={'body1'}
            className="max-w-[470px] pb-10 text-lg font-semibold text-base-400"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint dicta veniam cumque sequi
            ullam dignissimos doloribus at harum? Quod, delectus. Eum harum dicta omnis possimus
            labore minima, veritatis similique sapiente?
          </Typography>
          <hr />
        </div>
      </div>
    </div>
  );
}
