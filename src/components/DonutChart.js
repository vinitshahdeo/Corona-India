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

  componentWillReceiveProps(nextProps) {
    var index,
      state = [],
      cured = [],
      data = nextProps.data;
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
