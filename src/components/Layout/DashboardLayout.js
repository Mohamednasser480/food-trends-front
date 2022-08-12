import React, { useState } from "react";
import { DashboardNavbar, DashboardSidebar } from "./Navbar";

const DashboardLayout = (props) => {
  const [showSidebar, setShowSidebar] = useState(true);

  const navbarToggleHandler = () => {
    console.log(showSidebar);
    setShowSidebar((showSide) => !showSide);
  };

  return (
    <div className="flex h-screen">
      <DashboardSidebar links={props.links} showSidebar={showSidebar} />
      <div className="h-full flex-1 overflow-y-auto">
        <DashboardNavbar onToggleSidebar={navbarToggleHandler} />
        <main className="flex h-[calc(100vh-5rem)] flex-col gap-y-5 overflow-y-auto bg-base-200 p-6">
          {props.children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
