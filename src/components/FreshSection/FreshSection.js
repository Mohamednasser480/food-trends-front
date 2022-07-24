import React from 'react';
import FreshItem from './FreshItem';

const items = [
  {
    title: 'Pesticide Free',
    image: '/freshCarrot.png',
    description:
      'Our organic fruit and vegetables are grown by farmers who use only natural fertilisers on their land',
  },
  {
    title: 'Keep You Healthy',
    image: '/freshJar.png',
    description:
      'Our organic meat and poultry is always free-range, produced with strict organic standards.',
  },
  {
    title: 'Made with love',
    image: '/freshDairy.png',
    description: 'Our chickens and dairy cows are cared for by a dedicated group of farmers chosen',
  },
  {
    title: 'Fresh and Organic',
    image: '/freshFruit.png',
    description:
      'Organic farming standards promote sustainable production, the highest welfare standards',
  },
];

export default function FreshSection() {
  return (
    <div className="mb-24 bg-[#eef4ed] py-24">
      <div className="container grid max-w-[1200px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <FreshItem title={item.title} image={item.image} desc={item.description} />
        ))}
      </div>
    </div>
  );
}
