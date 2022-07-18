import React from "react";
import { Typography } from "../UI";
import { Link } from "react-router-dom";
import {BsArrowRight} from "react-icons/bs"

export default function SectionTitle({text,navigateTo}) {
  return (
    <div className="flex items-center flex-col sm:flex-row  sm:justify-between">
      <Typography
        component={"h3"}
        className={" !tracking-normal text-primary "}
      >
        {text}
      </Typography>

      <Link to={navigateTo}
      className="flex items-center gap-2 uppercase font-semibold tracking-wide text-primary hover:text-secondary group">
        View All
        <BsArrowRight className="group-hover:-ml-1 transition-all duration-300" size={20} />
      </Link>
    </div>
  );
}
