import React from 'react';
import {
  Categories,
  Slider,
  Offers,
  SpecialOffer,
  FeatureProducts,
  Ads,
  FreshSection,
  Ratings,
} from '../components';
import { ScrollUp } from '../components/Layout';

const Home = () => {
  return (
    <div>
      <Slider />
      <Categories />
      <Offers />
      <SpecialOffer />
      <FeatureProducts />
      <Ads />
      <FreshSection />
      <Ratings />
    </div>
  );
};

export default Home;
