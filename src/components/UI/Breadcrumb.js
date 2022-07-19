import React from "react";
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

const Breadcrumbs = () => {
  const breadcrumbsData = useBreadcrumbs();
  const breadcrumbs = breadcrumbsData.map((breadcrumb, index, arr) => {
    const breadcrumbEl = breadcrumb.breadcrumb;
    return index === arr.length - 1 ? (
      <li className="capitalize">{breadcrumbEl}</li>
    ) : (
      <li key={breadcrumb.key}>
        <Link
          to={breadcrumb.key}
          className="group relative text-base-400 transition-colors hover:text-primary hover:!no-underline"
        >
          <div className="absolute left-0 bottom-0 h-0.5 w-0 bg-primary transition-all group-hover:w-full"></div>
          {breadcrumbEl}
        </Link>
      </li>
    );
  });
  return (
    <div className="breadcrumbs max-w-full overflow-x-auto bg-base-300 py-4 text-sm">
      <ul className="flex flex-wrap justify-center text-base">{breadcrumbs}</ul>
    </div>
  );
};

export default Breadcrumbs;
