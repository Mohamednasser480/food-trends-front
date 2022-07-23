import React from 'react';
import { Typography } from '../UI';

const team = [
  {
    id: 1,
    name: 'Muhammed Eid',
    job: 'Frontend Developer',
    image: '/sisi.jpg',
  },
  {
    id: 2,
    name: 'Muhammed Nasser',
    job: 'Backend Developer',
    image: '/sisi.jpg',
  },
  {
    id: 3,
    name: 'Eslam Ali',
    job: 'Team Leader',
    image: '/sisi.jpg',
  },
  {
    id: 4,
    name: 'Mahmoud Fahiem',
    job: 'DevOps Engineer',
    image: '/sisi.jpg',
  },
  {
    id: 5,
    name: 'Mahmoud Mekky',
    job: 'Frontend Developer',
    image: '/sisi.jpg',
  },
];
export default function OurTeam() {
  return (
    <div className="container my-40 grid grid-cols-5 gap-2 py-10">
      {team.map((member) => {
        return (
          <div key={member.id} className="text-center">
            <img src={require('../../assets' + member.image)} alt="" />
            <Typography component={'h6'} className="pt-8">
              {member.name}
            </Typography>
            <Typography component={'body2'}>{member.job}</Typography>
          </div>
        );
      })}
    </div>
  );
}
