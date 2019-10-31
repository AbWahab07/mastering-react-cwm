import React, { Component } from "react";
import _ from "lodash";

// movies, columns : Array

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content)
      // renders the Like and Delete button
      return column.content(item);

    return _.get(item, column.path);
  };

  render() {
    const { data, columns } = this.props;

    return (
      <tbody>
        {data.map(item => (
          <tr>
            {columns.map(column => (
              <td>{this.renderCell(item, column)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
