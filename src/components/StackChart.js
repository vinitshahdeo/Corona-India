import React from "react";
import ReactApexChart from "react-apexcharts";

/**
 * 
 * @author Vinit Shahdeo <vinitshahdeo@gmail.com>
 */
export default class StackChart extends React.Component {
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
      deaths = [],
      data = nextProps.data;
    for (index = 0; index < data.length; index++) {
      if (parseInt(data[index].deaths) !== 0) {
        deaths.push(parseInt(data[index].deaths));
        state.push(data[index].state);
      }
    }
    this.setState({
      series: deaths,
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
