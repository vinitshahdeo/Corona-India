import React from "react";
import { Button, Card, CardColumns, Container } from "react-bootstrap";
export default class NewsCards extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
    };
  }

  componentDidMount() {
    var index,
      news = [];
    fetch(
      "https://newsapi.org/v2/top-headlines?country=in&q=COVID&sortBy=popularity&apiKey=cf7f3c64d5b24083b7e9db822088fda1&pageSize=9&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.articles);
        for (index = 0; index < data.articles.length; index++) {
          news.push({
            title: data.articles[index].title,
            description: data.articles[index].description,
            source: data.articles[index].source.name,
            url: data.articles[index].url,
            urlImg: data.articles[index].urlToImage,
          });
        }
        this.setState({
          news: news,
        });
        console.log(news);
      })
      .catch(console.log);
  }

  render() {
    return this.state.news.map((data, index) => {
      return (
        <Card>
          <Card.Img variant="top" src={data.urlImg} />
          <Card.Body>
            <Card.Title>{data.title}</Card.Title>
            <Card.Text>{data.description}</Card.Text>
            <Button variant="primary" href={data.url}>
              View Full News
            </Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{data.source}</small>
          </Card.Footer>
        </Card>
      );
    });
  }
}
