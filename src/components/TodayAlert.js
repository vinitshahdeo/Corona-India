import React from "react";
import { Alert, Button, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

/**
 * @author Vinit Shahdeo
 */
export default class TodayAlert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  setShow(show) {
    this.setState({
      show,
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      todayCases: nextProps.dailyData.deltaconfirmed,
      todayRecovered: nextProps.dailyData.deltarecovered,
    });
  }

  render() {
    if (this.state.show) {
      return (
        <Container className="today-alert">
          <Alert
            variant="danger"
            onClose={() => this.setShow(false)}
            dismissible
          >
            <Alert.Heading>Today's COVID-19 Report</Alert.Heading>
            <p>
              In India, total reported corona cases today is{" "}
              <strong>{this.state.todayCases}</strong> and total recovered cases
              today is <strong>{this.state.todayRecovered}</strong>. The{" "}
              <strong>lockdown</strong> has been put in place to control the
              situation, please follow this strictly. Kindly{" "}
              <a
                href="https://pib.gov.in/PressReleseDetailm.aspx?PRID=1608851"
                target="_blank"
              >
                contribute
              </a>{" "}
              to <strong>PM CARES</strong> fund.
              <span className="google-pay">
                <Button
                  href={"https://gpay.app.goo.gl/277dRg"}
                  variant="primary"
                >
                  <FontAwesomeIcon icon={faGoogle} /> Donate Now
                </Button>
              </span>
            </p>
          </Alert>
        </Container>
      );
    }
    return (
      <Container>
        <Row className="justify-content-md-center">
          <span className="todayButton">
            <Button onClick={() => this.setShow(true)}>
              Check Today's Alert
            </Button>
          </span>
        </Row>
      </Container>
    );
  }
}
