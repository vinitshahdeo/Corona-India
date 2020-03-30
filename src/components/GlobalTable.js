import React from "react";
import {
  Accordion,
  Button,
  Card,
  Container,
  Table,
  Row,
} from "react-bootstrap";
import CountryRow from "./CountryRow";
/**
 *
 * @author Vinit Shahdeo <vinitshahdeo@gmail.com>
 */
export default class GlobalTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container className="symptoms">
        <Accordion defaultActiveKey="1">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <center>
                <strong>
                  Click here to view the country-wise COVID-19 data
                </strong>
              </center>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Table striped bordered hover variant="light">
                  <thead>
                    <tr>
                      <th>Country</th>
                      <th>Confirmed</th>
                      <th>Active</th>
                      <th>Cured</th>
                      <th>Deaths</th>
                    </tr>
                  </thead>
                  <tbody>
                    <CountryRow data={this.props.data} />
                  </tbody>
                </Table>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <br></br>
      </Container>
    );
  }
}
