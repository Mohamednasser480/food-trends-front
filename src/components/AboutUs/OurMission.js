import React from 'react';
import { Typography } from '../UI';

export default function OurMission() {
  return (
    <div className="container mb-40 flex max-w-7xl justify-between px-12">
      <div className="w-1/2 pr-10">
        <div>
          <Typography component={'subtitle1'} className="mt-12">
            Real food – Real Health
          </Typography>
          <Typography component={'h1'} className="py-8 text-primary">
            LIFE GETS GREAT WITH ORGANIC FOOD
          </Typography>
          <Typography component={'body1'} className="w-3/4 !text-[18px] leading-8">
            Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits,
            vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with a
            pristine matte finish for soft, velvety smooth skin.
          </Typography>
        </div>
        <div className="mt-12">
          <Typography component={'subtitle2'}>Our Mission</Typography>
          <Typography component={'subtitle2'}>Producing the highest quality products</Typography>
        </div>
      </div>
      <div className="relative">
        <img src={require('../../assets/our-mission-lg2.jpg')} alt="" className="" />
        <img
          src={require('../../assets/our-mission-sm.jpg')}
          alt=""
          className="absolute -bottom-1/4 -left-1/4 mb-20 h-2/4 w-2/4"
        />
      </div>
    </div>
  );
}
