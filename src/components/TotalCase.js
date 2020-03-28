import React from "react";
import { Table, Container } from "react-bootstrap";

export default class TotalCase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cases: 0,
      deaths: 0,
      active: 0,
      recovered: 0,
    };
  }

  componentDidMount() {
    fetch("https://corona.lmao.ninja/all")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          cases: data.cases,
          deaths: data.deaths,
          active: data.active,
          recovered: data.recovered,
        });
      })
      .catch(console.log);
  }

  render() {
    return (
      <Container>
        <br></br>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th colSpan="2">
                <center>
                  <strong>Overall Global Stats</strong>
                </center>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Total Cases</strong>
              </td>
              <td>{this.state.cases}</td>
            </tr>
            <tr>
              <td>
                <strong>Total Deaths</strong>
              </td>
              <td>{this.state.deaths}</td>
            </tr>
            <tr>
              <td>
                <strong>Total Recovered</strong>
              </td>
              <td>{this.state.recovered}</td>
            </tr>
            <tr>
              <td>
                <strong>Active Now</strong>
              </td>
              <td>{this.state.active}</td>
            </tr>
          </tbody>
        </Table>
        <br></br>
      </Container>
    );
  }
}
