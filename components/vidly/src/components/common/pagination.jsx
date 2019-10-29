import React, { Component } from "react";

// Input: Total num of items and No. of results on a page
// Events: onClick

const Pagination = props => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a class="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a class="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a class="page-link" href="#">
            3
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
