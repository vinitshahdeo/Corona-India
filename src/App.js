import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Jumbotron,
  Button,
  Badge,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  ButtonGroup,
  Alert
} from "react-bootstrap";
import PieChart from "./components/PieChart";
import { getCurrentStats } from "./api/sanitizeData";
import TableData from "./components/table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faTwitter,
  faMedium,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import BarChart from "./components/BarChart";
import StackChart from "./components/StackChart";
import DonutChart from "./components/DonutChart";
import NewsColumn from "./components/NewsColumn";
import TodayAlert from "./components/TodayAlert";
import PreCaution from "./components/Precuations";
import TotalCase from "./components/TotalCase";
import Symptoms from "./components/Symptoms";
import { fetchCovidData } from "./api/fetchCovidData";
import DisclaimerModal from "./components/Disclaimer";

import DarkTheme, { createTheme } from 'react-dark-theme'

const lightTheme = {
  background: 'white',
  text: 'black',
}

const darkTheme = {
  background: 'black',
  text: 'white',
}

const myTheme = createTheme(darkTheme, lightTheme)

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      covidData: [],
      code: "< />",
      modalShow: false
    };
    this.setModalShow.bind(this);
  }
  componentDidMount() {
    fetchCovidData((data, daily) => {
      this.setState({
        covidData: data.splice(1),
        confirmed: data[0].confirmed,
        deaths: data[0].deaths,
        cure: data[0].recovered,
        active: data[0].active,
        data: getCurrentStats(
          parseInt(data[0].confirmed),
          parseInt(data[0].deaths),
          parseInt(data[0].recovered),
          parseInt(data[0].active)
        ),
        dailyData: daily
      });
    });
  }

  setModalShow(show) {
    this.setState({
      modalShow: show
    });
  }

  render() {
    return (
      <div className="app" style={{ backgroundColor: myTheme.background, color: myTheme.text }}>
      
        <Navbar bg="dark" variant="dark" fixed="top">
          <Navbar.Brand href="#home">
            <strong>COVID-19</strong> | India{" "}
            <Badge variant="warning">{this.state.confirmed}</Badge>{" "}
            <Badge variant="danger">{this.state.deaths}</Badge>{" "}
            <Badge variant="success">{this.state.cure}</Badge>
            <DarkTheme light={lightTheme} dark={darkTheme} />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {this.state.code} with ♡ by{" "}
              <a href="https://github.com/vinitshahdeo">@vinitshahdeo</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        <Jumbotron>
          <h1 className="title">
            <strong>
              <br></br>Hello!
            </strong>{" "}
            👋{" "}
          </h1>
          <h5>
            I’m sure you’ll agree that, at this point, it isn’t an exaggeration
            to say that we are at war against the coronavirus and that it is a
            war we must win. The next few weeks are critical in this battle. I
            request everyone to <b>stay at home</b> and enjoy good time with
            family.
          </h5>
          <h4>
            <strong>Let's fight with Corona together!</strong>
          </h4>
          <Badge pill variant="success">
            #CoronaKoHaranaHai
          </Badge>
          {}{" "}
          <Badge pill variant="secondary">
            #CoronaVirusLockdown
          </Badge>
          {/* <p>
            <Button variant="outline-info">Your friend,<br></br> <strong>Vinit Shahdeo</strong></Button>
          </p> */}
        </Jumbotron>
        <TodayAlert dailyData={this.state.dailyData} />
        <Container>
          <Row className="justify-content-md-center myRow">
            <Col sm={6} md="auto" className="myCol">
              <PieChart data={this.state.data} />
            </Col>
            <Col sm={6} md="auto" className="myCol">
              <Button variant="warning" size="lg" block>
                Confirmed Cases{" "}
                <Badge variant="light">{this.state.confirmed}</Badge>
              </Button>
              <Button variant="info" size="lg" block>
                Total Active <Badge variant="light">{this.state.active}</Badge>
              </Button>
              <Button variant="secondary" size="lg" block>
                Total Cured <Badge variant="light">{this.state.cure}</Badge>
              </Button>
              <Button variant="danger" size="lg" block>
                Total Deaths <Badge variant="light">{this.state.deaths}</Badge>
              </Button>
            </Col>
          </Row>
        </Container>
        <BarChart data={this.state.covidData} />
        <Container>
          <Row>
            <Col lg={6}>
              <h5 className="section-title">
                <strong>Number Of Deaths</strong>
              </h5>
              <StackChart data={this.state.covidData} />
            </Col>
            <Col lg={6}>
              <h5 className="section-title">
                <strong>Number Of Cured Cases</strong>
              </h5>
              <DonutChart data={this.state.covidData} />
            </Col>
          </Row>
          <br></br>
        </Container>
        <PreCaution />
        <Symptoms />
        <TableData data={this.state.covidData} />
        <NewsColumn />
        <DisclaimerModal />
        <TotalCase />
        <Alert variant="success" class="myMessage">
          <Alert.Heading>
            <strong>Stay Home, Stay Safe!</strong>
          </Alert.Heading>
          <p>
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
      </div>
    );
  }
}
