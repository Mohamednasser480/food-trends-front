import React from "react";
import { Breadcrumb, Typography } from "./index";

const Page = (props) => {
  const classes = `py-10 ${props.className || ""}`.trim();
  return (
    <>
      <Breadcrumb />
      <div className={classes}>
        <Typography
          variant="h3"
          component="h1"
          className="text-center capitalize text-primary"
        >
          {props.title}
        </Typography>
        {props.children}
      </div>
    </>
  );
};

export default Page;
