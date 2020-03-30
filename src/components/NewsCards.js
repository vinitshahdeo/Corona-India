import React from "react";
import { Button, Card } from "react-bootstrap";

/**
 * 
 * @author Vinit Shahdeo <vinitshahdeo@gmail.com>
 */
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
      })
      .catch(console.log);
  }

  render() {
    return this.state.news.map((data, index) => {
      return (
        <Card key={index}>
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
