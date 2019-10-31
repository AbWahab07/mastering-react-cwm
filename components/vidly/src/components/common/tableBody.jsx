import React, { Component } from "react";
import Like from "../common/like";

// movies: Array
// onDelete, onLike,

class TableBody extends Component {
  render() {
    const { data, columns, onLike, onDelete } = this.props;

    return (
      <tbody>
        {data.map(item => (
          <tr>
            {columns.map(column => (
              <td></td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
