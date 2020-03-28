import React from "react";

export default class TableRowData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
    };
  }

  render() {
    return this.props.data.map((data, index) => {
      return (
        <tr key={index}>
          <td>{data.state}</td>
          <td>{data.confirmed}</td>
          <td>{data.active}</td>
          <td>{data.recovered}</td>
          <td>{data.deaths}</td>
        </tr>
      );
    });
  }
}
