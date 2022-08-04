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
    image: '/Eslam.jpeg',
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
      <Typography component={'h2'} className="text-center text-primary xl:text-7.5xl">
        Our Team
      </Typography>
      <div className=" mb-40 grid gap-4 py-10 sm:grid-cols-2 md:grid-cols-5">
        {team.map((member) => {
          return (
            <div key={member.id} className="text-center">
              <img
                src={require('../../assets' + member.image)}
                alt=""
                className="w-full px-5 md:h-3/4 md:p-0"
              />
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
