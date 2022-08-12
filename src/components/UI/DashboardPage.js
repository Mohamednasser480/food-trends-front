import React from "react";
import { Typography } from "./";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "./Breadcrumb";

const DashboardPage = (props) => {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col gap-y-5">
      {pathname.split("/").length > 2 ? <Breadcrumbs /> : null}
      {props.title && (
        <Typography
          variant="h3"
          component="h1"
          className="text-center uppercase text-primary"
        >
          {props.title}
        </Typography>
      )}
      <div className={`rounded-xl bg-white p-5 ${props.className || ""}`}>
        {props.children}
      </div>
    </div>
  );
};

export default DashboardPage;
