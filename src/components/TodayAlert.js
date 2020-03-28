import React from "react";
import { Alert, Button, Container, Row } from "react-bootstrap";

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

  componentWillReceiveProps(nextProps) {
      console.log('next', nextProps);
    this.setState({
        todayCases: nextProps.dailyData[0].confirmeddelta,
        todayRecovered: nextProps.dailyData[0].recovereddelta
      });
  }

  render() {
    if (this.state.show) {
      return (
        <Alert variant="danger" onClose={() => this.setShow(false)} dismissible>
          <Alert.Heading>Today's COVID-19 Report</Alert.Heading>
          <p>
            In India, total reported corona cases today is{" "}
            <strong>{this.state.todayCases}</strong> and total recovered cases
            today is <strong>{this.state.todayRecovered}</strong>. The{" "}
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
