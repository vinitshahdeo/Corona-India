import React from "react";
import { Table, TableProps } from "react-bootstrap";

export default class TableRowData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://api.covid19india.org/data.json"
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ response: data.statewise.splice(1) });
        console.log('data', data.statewise)
      })
      .catch(console.log);
  }

  render() {
    return this.state.response.map((data, index) => {
      return (
        <tr>
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
