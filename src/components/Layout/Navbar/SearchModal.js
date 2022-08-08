import React, { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Button, Modal } from "../../UI";
import { useNavigate } from "react-router-dom";

const SearchModal = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const searchInput = useRef();
  let navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const searchInputValue = searchInput.current.value;
    if (searchInputValue == "") return;
    navigate(`/search/${searchInputValue}`);
    setShowSearchBar(false);
  };

  return (
    <>
      <AiOutlineSearch
        size={25}
        cursor={"pointer"}
        className={"transition-all hover:text-green-800"}
        onClick={setShowSearchBar}
      />

      <Modal
        show={showSearchBar}
        setShow={setShowSearchBar}
        className="flex rounded-md p-6"
      >
        <form
          className="relative mt-12 flex min-h-[140px] w-[700px] max-w-full flex-col items-center gap-3"
          onSubmit={onSubmit}
        >
          <input
            type="search"
            className="h-16 w-full rounded-lg border-2 px-5 font-sans text-xl font-medium outline-none transition-all"
            placeholder="Search..."
            ref={searchInput}
            autoFocus={true}
          />
          <Button
            variant="primary"
            className="w-fit max-w-full px-16"
            type="submit"
          >
            Search
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default SearchModal;
