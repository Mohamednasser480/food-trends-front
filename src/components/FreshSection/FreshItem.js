import React from 'react';
import { Typography } from '../UI';

export default function FreshItem({ title, image, desc }) {
  return (
    <div>
      <img src={require('../../assets' + image)} alt="" />
      <Typography component={'subtitle2'}>{title}</Typography>
      <Typography component={'body1'}>{desc}</Typography>
    </div>
  );
}
