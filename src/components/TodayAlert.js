import React from "react";
import { Alert, AlertProps, Button, Container, Row } from "react-bootstrap";

/**
 * @author Vinit Shahdeo
 */
export default class TodayAlert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }

  setShow(show) {
    this.setState({
      show,
    });
  }

  componentDidMount() {
    fetch("https://corona.lmao.ninja/countries/IND")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          todayCases: data.todayCases,
          todayDeaths: data.todayDeaths,
        });
      })
      .catch(console.log);
  }

  render() {
    if (this.state.show) {
      return (
        <Alert variant="danger" onClose={() => this.setShow(false)} dismissible>
          <Alert.Heading>Today's COVID-19 Report</Alert.Heading>
          <p>
            In India, total reported cases today is{" "}
            <strong>{this.state.todayCases}</strong> and total deaths reported
            today is <strong>{this.state.todayDeaths}</strong>. The{" "}
            <strong>lockdown</strong> has been put in place to control the
            situation, please follow this strictly.
          </p>
        </Alert>
      );
    }
    return (
      <Container>
        <Row className="justify-content-md-center">
          <center>
          <Button onClick={() => this.setShow(true)}>
            Check Today's Alert
          </Button>
          </center>
        </Row>
      </Container>
    );
  }
}
