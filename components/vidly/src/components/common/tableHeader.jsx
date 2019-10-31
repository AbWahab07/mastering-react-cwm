import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

// columns: array
// we should also pass sortColumn: Object
// onSort: function

class TableHeader extends Component {
  raiseSort = path => {
    const sortColumn = { ...this.props.sortColumn }; // cloning
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    // updating order when path is same
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = column => {
    const { sortColumn } = this.props;
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc")
      return <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faCaretUp} />;

    return <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faCaretDown} />;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => (
            <th
              className="clickable"
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
