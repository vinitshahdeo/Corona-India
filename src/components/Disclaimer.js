import React from "react";
import { Button, Accordion, Card, Container } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import disclaimerPath from "../disclaimer/DISCLAIMER.md";

export default class DisclaimerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { markdown: "" };
  }

  componentDidMount() {
    fetch(disclaimerPath)
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        this.setState({
          markdown: text,
        });
      });
  }

  render() {
    return (
      <Container>
        <Accordion defaultActiveKey="1">
          <Card>
            <Card.Header className="disclaimer">
              The data provided by this website is for general informational
              purposes only. <br></br>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                View Disclaimer
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ReactMarkdown source={this.state.markdown} />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    );
  }
}
