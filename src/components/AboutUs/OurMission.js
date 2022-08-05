import React from 'react';
import { Typography } from '../UI';

export default function OurMission() {
  return (
    <div className="container mb-20 flex max-w-7xl flex-col-reverse justify-between sm:flex-row md:mb-32 md:px-12">
      <div className="w-full text-center sm:text-left md:w-1/2 md:pr-10">
        <div>
          <Typography component={'subtitle1'} className="mt-12">
            Real food &#8211; Real Health
          </Typography>
          <Typography component={'h2'} className="py-4 !tracking-normal text-primary xl:text-7.5xl">
            LIFE GETS GREAT WITH ORGANIC FOOD
          </Typography>
          <Typography component={'body1'} className="w-full md:w-10/12">
            Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits,
            vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with a
            pristine matte finish for soft, velvety smooth skin.
          </Typography>
        </div>
        <div className="mt-3">
          <Typography component={'subtitle2'} className="mb-5 !text-[20px]">
            Our Mission
          </Typography>
          <Typography component={'body1'} className="mb-5 w-full md:w-10/12">
            Providing an easy to use, safe platform for customers who are seeking 100% organic
            products that could not be found on supermarkets shelves.
          </Typography>
          <Typography component={'subtitle2'} className="mb-5 !text-[20px]">
            Producing the highest quality products
          </Typography>
          <Typography component={'body1'} className="mb-5 w-full md:w-10/12">
            Providing an easy to use, safe platform for customers who are seeking 100% organic
            products that could not be found on supermarkets shelves.
          </Typography>
        </div>
      </div>
      <div>
        <div className="relative">
          <img src={require('../../assets/our-mission-lg2.jpg')} alt="" className="" />
          <img
            src={require('../../assets/our-mission-sm.jpg')}
            alt=""
            className="absolute -bottom-1/4 -left-1/4 mb-24 hidden h-2/4 w-2/4 lg:block"
          />
        </div>
      </div>
    </div>
  );
}
