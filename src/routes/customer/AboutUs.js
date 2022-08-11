import React from "react";
import AboutUsIntro from "../../components/AboutUs/AboutUsIntro";
import OurMission from "../../components/AboutUs/OurMission";
import OurTeam from "../../components/AboutUs/OurTeam";
import { Breadcrumb } from "../../components/UI";

export default function AboutUs() {
  return (
    <div>
      <Breadcrumb />
      <AboutUsIntro />
      <OurMission />
      <OurTeam />
    </div>
  );
}
