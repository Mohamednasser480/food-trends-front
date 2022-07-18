import React from 'react';
import AboutUsIntro from '../components/AboutUs/AboutUsIntro';
import OurMission from '../components/AboutUs/OurMission';
import OurTeam from '../components/AboutUs/OurTeam';

export default function AboutUs() {
  return (
    <div className='max-w-[1200px] container'>
      <AboutUsIntro />
      <OurMission />
      <OurTeam />
    </div>
  );
}
