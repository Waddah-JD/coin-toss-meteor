import React from "react";

export default ({ dataCount, pageSize, currentPage, setCurrentPage }) => {
  const pages = Math.ceil(dataCount / pageSize);

  return (
    <div>
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
    </div>
  );
};
