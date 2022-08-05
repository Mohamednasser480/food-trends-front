import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchSidebar = () => {
  return (
    <>
      <AiOutlineSearch
        size={25}
        cursor={"pointer"}
        className={"transition-all hover:text-green-800"}
      />
    </>
  );
};

export default SearchSidebar;
