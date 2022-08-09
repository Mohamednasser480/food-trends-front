import React, { useState } from "react";
import { Button, Sidebar } from "../UI";

const FiltersSidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => setShowSidebar(true)}>
        Filters
      </Button>
      <Sidebar show={showSidebar} setShow={setShowSidebar}>
        Filters Goes Here...
      </Sidebar>
    </>
  );
};

export default FiltersSidebar;
