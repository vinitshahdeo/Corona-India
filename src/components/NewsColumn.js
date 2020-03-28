import React from "react";
import { Button, Card, CardColumns, Container, Row } from "react-bootstrap";
import NewsCards from "./NewsCards";
export default class NewsColumn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
            <br></br>
            <h3 className="news-headline"><strong><center>News Headlines</center></strong></h3>
            <br></br>
        </Row>
        <CardColumns>
          <NewsCards />
        </CardColumns>
      </Container>
    );
  }
}