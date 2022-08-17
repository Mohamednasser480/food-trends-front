import React from "react";
import { Breadcrumb, Typography } from "./index";

const Page = (props) => {
  return (
    <>
      <Breadcrumb />
      <div className="container py-16 lg:py-20">
        <Typography
          variant="h3"
          component="h1"
          className="mb-14 text-center uppercase text-primary"
        >
          {props.title}
        </Typography>
        <div className={props.className || ""}>{props.children}</div>
      </div>
    </>
  );
};

export default Page;
