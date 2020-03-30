import React from "react";
import { Badge } from "react-bootstrap";

/**
 * 
 * @author Vinit Shahdeo <vinitshahdeo@gmail.com>
 */
export default class CountryRow extends React.Component {
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
          <td>{data.country}</td>
          <td><Badge variant="warning">{data.cases}</Badge></td>
          <td><Badge variant="success">{data.active}</Badge></td>
          <td><Badge variant="dark">{data.recovered}</Badge></td>
          <td><Badge variant="danger">{data.deaths}</Badge></td>
        </tr>
      );
    });
  }
}
