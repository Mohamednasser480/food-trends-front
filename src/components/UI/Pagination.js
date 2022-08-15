export default function Pagination({
  onPageChange,
  currentPage,
  numberOfItems,
}) {
  const pageNumbers = Math.ceil(numberOfItems / 8); //Change to 10
  const pageNumbersArray = Array(pageNumbers).fill(0);

  const onClickHanlder = (currentPage) => {
    onPageChange(currentPage);
  };

  return (
    <div className="flex w-full items-center justify-between border-t border-gray-200 bg-white px-4 py-3 md:px-0">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Page <span className="font-medium">{currentPage}</span>
            {pageNumbers > 0 ? (
              <>
                {" of "}
                <span className="font-medium">{pageNumbers}</span>
              </>
            ) : (
              ""
            )}
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            {pageNumbersArray.map((page, index) => {
              return (
                <button
                  key={index}
                  className={` relative inline-flex cursor-pointer items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-primary hover:text-white ${
                    currentPage == index + 1
                      ? "cursor-auto bg-primary !text-white"
                      : ""
                  }`}
                  onClick={() => {
                    onClickHanlder(index + 1);
                  }}
                  aria-current="page"
                  disabled={currentPage == index + 1}
                >
                  {index + 1}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
