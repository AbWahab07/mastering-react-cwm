import React, { Component } from "react";
import _ from "lodash"; // optimized version of Underscore

// Input: Total num of items and No. of results on a page
// Events: onClick(onPageChange)

const Pagination = props => {
  const { itemsCount, pageSize } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize); // converting floating number to an integer

  // Edge case: if pageSize is 10
  if (pagesCount === 1) return null;

  const pages = _.range(1, pagesCount + 1);
  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li key={page} className="page-item">
            <a className="page-link" href="#">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
