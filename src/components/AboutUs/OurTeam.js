import React from 'react';
import { Typography } from '../UI';

const team = [
  {
    id: 1,
    name: 'Muhammed Eid',
    job: 'Frontend Developer',
    image: '/eid.jpeg',
  },
  {
    id: 2,
    name: 'Muhammed Nasser',
    job: 'Backend Developer',
    image: '/nasser.jpeg',
  },
  {
    id: 3,
    name: 'Eslam Ali',
    job: 'Team Lead',
    image: '/sisi.jpg',
  },
  {
    id: 4,
    name: 'Mahmoud Fahiem',
    job: 'DevOps Engineer',
    image: '/fahiem.jpeg',
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
    <div className="container">
      <Typography component={'h3'}>Our Team</Typography>
      <div className=" mb-40 grid grid-cols-5 gap-2 py-10">
        {team.map((member) => {
          return (
            <div key={member.id} className="text-center">
              <img src={require('../../assets' + member.image)} alt="" className="h-2/3" />
              <Typography component={'h6'} className="pt-8">
                {member.name}
              </Typography>
              <Typography component={'body2'}>{member.job}</Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
}
