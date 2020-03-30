import React from "react";
import { Badge } from "react-bootstrap";

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
          <td><Badge variant="warning">{data.confirmed}</Badge></td>
          <td><Badge variant="success">{data.active}</Badge></td>
          <td><Badge variant="info">{data.recovered}</Badge></td>
          <td><Badge variant="danger">{data.deaths}</Badge></td>
        </tr>
      );
    });
  }
}
