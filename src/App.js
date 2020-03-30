import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Jumbotron,
  Button,
  Badge,
  Navbar,
  Container,
  Row,
  Col
} from "react-bootstrap";
import PieChart from "./components/PieChart";
import { getCurrentStats, getDailyData } from "./api/sanitizeData";
import TableData from "./components/table";
import BarChart from "./components/BarChart";
import StackChart from "./components/StackChart";
import DonutChart from "./components/DonutChart";
import NewsColumn from "./components/NewsColumn";
import TodayAlert from "./components/TodayAlert";
import PreCaution from "./components/Precuations";
import TotalCase from "./components/TotalCase";
import Symptoms from "./components/Symptoms";
import { fetchCovidData, fetchGlobalCovidData } from "./api/fetchCovidData";
import DisclaimerModal from "./components/Disclaimer";
import CountUp from "react-countup";
import Footer from "./components/Footer.js";
import MyMessage from "./components/MyMessage";
import DailyGraph from "./components/DailyGraph";
import ScrollTop from "./components/ScrollTop";
import GlobalTable from "./components/GlobalTable";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      covidData: [],
      code: "< />",
      modalShow: false,
      confirmed: 0,
      cure: 0,
      deaths: 0,
      timeSeriesCases: [],
      countryData: []
    };
    this.setModalShow.bind(this);
  }
  componentDidMount() {
    fetchCovidData((data, daily, series) => {
      this.setState({
        covidData: data.splice(1),
        confirmed: parseInt(data[0].confirmed),
        deaths: parseInt(data[0].deaths),
        cure: parseInt(data[0].recovered),
        active: parseInt(data[0].active),
        confirmedCount: data[0].confirmed,
        deathsCount: data[0].deaths,
        cureCount: data[0].recovered,
        activeCount: data[0].active,
        data: getCurrentStats(
          parseInt(data[0].confirmed),
          parseInt(data[0].deaths),
          parseInt(data[0].recovered),
          parseInt(data[0].active)
        ),
        dailyData: daily,
        timeSeriesCases: series
      });
      fetchGlobalCovidData((countryData) => {
        this.setState({
          countryData
        });
      })
    });
  }

  setModalShow(show) {
    this.setState({
      modalShow: show,
    });
  }

  render() {
    return (
      <div className="app">
        <Navbar bg="dark" variant="dark" fixed="top">
          <Navbar.Brand href="#home">
            <strong>COVID-19</strong> | India{" "}
            <Badge variant="warning">
              <CountUp end={this.state.confirmed} duration={1.3} />
            </Badge>{" "}
            <Badge variant="danger">
              <CountUp end={this.state.deaths} duration={2} />
            </Badge>{" "}
            <Badge variant="success">
              <CountUp end={this.state.cure} duration={1.5} />
            </Badge>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <span className="developer_copyright">
                {this.state.code} with ♡ by{" "}
                <a href="https://github.com/vinitshahdeo">@vinitshahdeo</a>
              </span>
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
            <strong>Let's fight with Corona together! 😷</strong>
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
                <Badge variant="light">{this.state.confirmedCount}</Badge>
              </Button>
              <Button variant="info" size="lg" block>
                Total Active{" "}
                <Badge variant="light">{this.state.activeCount}</Badge>
              </Button>
              <Button variant="secondary" size="lg" block>
                Total Cured{" "}
                <Badge variant="light">{this.state.cureCount}</Badge>
              </Button>
              <Button variant="danger" size="lg" block>
                Total Deaths{" "}
                <Badge variant="light">{this.state.deathsCount}</Badge>
              </Button>
            </Col>
          </Row>
        </Container>
        <BarChart data={this.state.covidData} />
        <Container className="extra-padding">{ }</Container>
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
        <Container className="extra-padding">{ }</Container>
        <Container>
          <DailyGraph
            data={getDailyData(this.state.timeSeriesCases).confirmed}
            series={getDailyData(this.state.timeSeriesCases).date}
            total={getDailyData(this.state.timeSeriesCases).total}
            recovered={getDailyData(this.state.timeSeriesCases).recovered}
          />
        </Container>
        <PreCaution />
        <Symptoms />
        <TableData data={this.state.covidData} />
        <NewsColumn />
        <DisclaimerModal />
        <TotalCase />
        <GlobalTable data={this.state.countryData}/>
        <MyMessage />
        <ScrollTop />
        <Footer />
      </div>
    );
  }
}
