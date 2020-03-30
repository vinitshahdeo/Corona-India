import React from "react";
import { Table, Row, Container, Button } from "react-bootstrap";
import TableRowData from "./tableRow";

/**
 * 
 * @author Vinit Shahdeo <vinitshahdeo@gmail.com>
 */
export default class TableData extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <span className="statewise">
            <Button variant="outline-secondary">
              <strong>State Wise Report</strong>
            </Button>
          </span>
        </Row>
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>State</th>
              <th>Confirmed Cases</th>
              <th>Active Case</th>
              <th>Cured</th>
              <th>Deaths</th>
            </tr>
          </thead>
          <tbody>
            <TableRowData data={this.props.data} />
          </tbody>
        </Table>
      </Container>
    );
  }
}
