import React from 'react';
import { Typography } from '../UI';

export default function AboutUsIntro() {
  return (
    <div className="">
      <Typography component={'h3'} className="py-10 text-center tracking-wide text-primary">
        {' '}
        SURPRISE, IT’S ALL ORGANIC
      </Typography>

      <div className="grid md:grid-cols-2 text-center md:text-left">
        <img src={require('../../assets/about1_01.jpg')} alt="" className="" />

        <div className="w-full md:pl-28">
          <Typography component={'subtitle1'} className="mt-12">
            Real food – Real Health
          </Typography>
          <Typography component={'h2'} className="py-8 tracking-normal text-primary xl:text-7xl">
            HEALTHIER YOU EAT, HEALTHIER YOU LIVE
          </Typography>
          <Typography component={'body1'} className="font-semibold max-w-[470px] pb-10 text-base-400 text-lg">
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
