import React from "react";
import { Alert, Container } from "react-bootstrap";

/**
 * 
 * @author Vinit Shahdeo <vinitshahdeo@gmail.com>
 */
export default class PreCaution extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Alert variant="success">
          <Alert.Heading>
            <strong>Stay Home, Stay Safe!</strong>
          </Alert.Heading>
          <p className="myMessage">
            <strong>COVID-19</strong> or as the plebs call it, the{" "}
            <strong>coronavirus </strong>
            has restricted a lot of us to our homes. You can choose to while
            away your time sleeping; doing nothing or you could utilize this
            break to <strong>‘Learn’</strong> something new. You know you’ve
            said this a lot to yourself - “I want to Learn 'X' but I can’t seem
            to find the time.” This is the time; Turn Your Self-Isolation into
            Self-Improvement!
          </p>
          <hr />
          <p className="mb-0">
            <strong>With lots of love</strong>, <br></br>
            <a href="https://fayz.in/stories/s/1522/0/?ckt_id=ZGL1ZGVk&title=story_of_vinit_shahdeo">
              <strong>Vinit Shahdeo</strong>
            </a>
          </p>
        </Alert>
      </Container>
    );
  }
}
