import React from "react";
import { Typography } from "../UI";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

export default function SectionTitle({ text, navigateTo }) {
  return (
    <div className="flex flex-col items-center sm:flex-row  sm:justify-between">
      <Typography
        component={"h3"}
        className={" !tracking-normal text-primary"}
      >
        {text}
      </Typography>

      {navigateTo && (
        <Link
          to={navigateTo}
          className="group flex items-center gap-2 font-satoshi font-semibold uppercase tracking-wide text-primary hover:text-secondary"
        >
          View All
          <BsArrowRight
            className="transition-all duration-300 group-hover:-ml-1"
            size={20}
          />
        </Link>
      )}
    </div>
  );
}
