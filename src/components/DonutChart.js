import React from "react";
import ReactApexChart from "react-apexcharts";

export default class DonutChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [],
      options: {
        chart: {
          type: "donut",
        },
        labels: [],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 250,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  }

  componentDidMount() {
    var index,
      state = [],
      cured = [];
    fetch(
      "https://api.covid19india.org/data.json"
    )
      .then((res) => res.json())
      .then((data) => {
        data = data.statewise.splice(1);
        for (index = 0; index < data.length; index++) {
          if (parseInt(data[index].recovered) !== 0) {
            cured.push(parseInt(data[index].recovered));
            state.push(data[index].state);
          }
        }
        this.setState({
          series: cured,
          options: {
            chart: {
              type: "donut",
            },
            labels: state,
            responsive: [
              {
                breakpoint: 480,
                options: {
                  chart: {
                    width: 450,
                  },
                  legend: {
                    position: "bottom",
                  },
                },
              },
            ],
          },
        });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="donut"
        />
      </div>
    );
  }
}
