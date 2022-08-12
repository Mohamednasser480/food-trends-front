import React, { useState } from "react";
import { DashboardNavbar, DashboardSidebar } from "./Navbar";

const DashbaordLayout = (props) => {
  const [showSidebar, setShowSidebar] = useState(true);

  const navbarToggleHandler = () => {
    console.log(showSidebar);
    setShowSidebar((showSide) => !showSide);
  };

  return (
    <div className="flex h-screen">
      <DashboardSidebar links={props.links} showSidebar={showSidebar} />
      <div className="flex-1">
        <DashboardNavbar onToggleSidebar={navbarToggleHandler} />
        <main className="grow overflow-y-auto">{props.children}</main>
      </div>
    </div>
  );
};

export default DashbaordLayout;
