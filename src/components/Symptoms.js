import React from "react";
import {
  Accordion,
  Button,
  Card,
  Container,
} from "react-bootstrap";

/**
 * @author Vinit Shahdeo <vinitshahdeo@gmail.com>
 */
export default class TableData extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container className="symptoms">
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <center>
                <strong>COVID-19 Symptoms</strong>
              </center>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                People may be sick with the virus for 1 to 14 days before
                developing symptoms. The most common symptoms of coronavirus
                disease (COVID-19) are fever, tiredness, and dry cough. Most
                people (about 80%) recover from the disease without needing
                special treatment. More rarely, the disease can be serious and
                even fatal. Older people, and people with other medical
                conditions (such as asthma, diabetes, or heart disease), may be
                more vulnerable to becoming severely ill. <br></br>
                <br></br>People may experience:
                <ul>
                  <li>
                    <strong>cough</strong>
                  </li>
                  <li>
                    <strong>fever</strong>
                  </li>
                  <li>
                    <strong>tiredness</strong>
                  </li>
                  <li>
                    <strong>difficulty breathing (severe cases)</strong>
                  </li>
                </ul>
                <Button
                  variant="outline-info"
                  href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses#:~:text=symptoms"
                >
                  Click here to learn more
                </Button>
                <br></br>
                <br></br>
                There is no specific medicine to prevent or treat coronavirus
                disease (COVID-19). People may need supportive care to help them
                breathe. If you have mild symptoms, stay at home until you’ve
                recovered. <br></br>
                <br></br>You can relieve your symptoms if you: <br></br>
                <ul>
                  <li>rest and sleep</li>
                  <li>keep warm</li>
                  <li>drink plenty of liquids</li>
                  <li>
                    use a room humidifier or take a hot shower to help ease a
                    sore throat and cough
                  </li>
                </ul>
                <br></br>
                If you develop a fever, cough, and have difficulty breathing,
                promptly seek medical care. Call in advance and tell your health
                provider of any recent travel or recent contact with travelers.
                <br></br>
                <br></br>
                <Button
                  variant="outline-danger"
                  href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses#:~:text=protect"
                >
                  Click here to learn more
                </Button>
                <br></br>
                <br></br>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <br></br>
        <br></br>
      </Container>
    );
  }
}
