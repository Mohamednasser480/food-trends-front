import React from 'react';
import FreshItem from './FreshItem';

const items = [
  {
    title: 'Fresh & Pesticide Free',
    image: '/freshCarrot.png',
    description:
      'Our organic fruit and vegetables are grown by farmers who use only natural fertilisers on their land',
  },
  {
    title: 'Fresh & Pesticide Free',
    image: '/freshCarrot.png',
    description:
      'Our organic fruit and vegetables are grown by farmers who use only natural fertilisers on their land',
  },
  {
    title: 'Fresh & Pesticide Free',
    image: '/freshCarrot.png',
    description:
      'Our organic fruit and vegetables are grown by farmers who use only natural fertilisers on their land',
  },
  {
    title: 'Fresh & Pesticide Free',
    image: '/freshCarrot.png',
    description:
      'Our organic fruit and vegetables are grown by farmers who use only natural fertilisers on their land',
  },
];

export default function FreshSection() {
  return (
    <div className="my-10 bg-[#eef4ed] py-10">
      <div className="container grid grid-cols-4 ">
        {items.map((item) => (
          <FreshItem title={item.title} image={item.image} desc={item.description} />
        ))}
      </div>
    </div>
  );
}
