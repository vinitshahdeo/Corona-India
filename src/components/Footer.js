import React from "react";
import { Button, ButtonGroup, Nav, Badge, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faTwitter,
  faMedium,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { markdown: "" };
  }

  render() {
    return (
      <Container>
        <Nav className="justify-content-center footer" activeKey="/home">
          <ButtonGroup aria-label="Social Media Icons">
            <Button
              variant="secondary"
              href="https://www.facebook.com/vinit.shahdeo"
            >
              <FontAwesomeIcon icon={faFacebook} />{" "}
            </Button>{" "}
            <Button variant="secondary" href="https://github.com/vinitshahdeo">
              <FontAwesomeIcon icon={faGithub} />{" "}
            </Button>{" "}
            <Button
              variant="secondary"
              href="https://twitter.com/Vinit_Shahdeo"
            >
              <FontAwesomeIcon icon={faTwitter} />{" "}
            </Button>{" "}
            <Button
              href="https://www.linkedin.com/in/vinitshahdeo/"
              variant="secondary"
            >
              <FontAwesomeIcon icon={faLinkedin} />{" "}
            </Button>{" "}
            <Button
              variant="secondary"
              href="https://www.instagram.com/vinitshahdeo/"
            >
              <FontAwesomeIcon icon={faInstagram} />{" "}
            </Button>{" "}
            <Button variant="secondary" href="https://medium.com/@vinitshahdeo">
              <FontAwesomeIcon icon={faMedium} />{" "}
            </Button>{" "}
          </ButtonGroup>
        </Nav>
        <Nav>
          <Badge pill variant="info" className="copyright">
            Made with ♡ by <strong>Vinit Shahdeo</strong>
          </Badge>
          <br></br>
        </Nav>
        <Nav class="extra-footer"></Nav>
      </Container>
    );
  }
}
