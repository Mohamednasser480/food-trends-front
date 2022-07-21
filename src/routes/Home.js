import React from 'react';
import {
  Categories,
  Slider,
  Offers,
  SpecialOffer,
  FeatureProducts,
  Ads,
  FreshSection,
} from '../components';

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
    </div>
  );
};

export default Home;
