import React from 'react';
import { Typography } from '../UI';

export default function AboutUsIntro() {
  return (
    <div className="container ">
      <Typography component={'h3'} className="py-10 text-center tracking-normal text-primary">
        {' '}
        SURPRISE, IT’S ALL ORGANIC
      </Typography>

      <div className="grid grid-cols-2">
        <img src={require('../../assets/about1_01.jpg')} alt="" />

        <div className="pl-12 w-3/4">
          <Typography component={'subtitle1'} className="mt-12">
            Real food – Real Health
          </Typography>
          <Typography component={'h1'} className="text-primary tracking-normal text-7xl py-8">HEALTHIER YOU EAT, HEALTHIER YOU LIVE</Typography>
          <Typography component={'body1'}>
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
