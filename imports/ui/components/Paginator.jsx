import React from "react";

export default ({ totalData, pageSize, currentPage, setCurrentPage }) => {
  const pages = Math.ceil(totalData / pageSize);

  const handlePrevClick = () => setCurrentPage((prev) => prev - 1);
  const handleNextClick = () => setCurrentPage((prev) => prev + 1);

  return (
    <div>
      <button disabled={currentPage == 1} onClick={handlePrevClick}>
        prev
      </button>
      {[...Array(pages).keys()].map((idx) => {
        idx += 1;
        return (
          <button
            disabled={currentPage == idx}
            key={idx}
            onClick={() => setCurrentPage(idx)}
          >
            {idx}
          </button>
        );
      })}
      <button disabled={currentPage == pages} onClick={handleNextClick}>
        next
      </button>
    </div>
  );
};
