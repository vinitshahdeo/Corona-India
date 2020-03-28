import React from "react";
import ReactApexChart from "react-apexcharts";
export default class BarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Total reported cases",
          data: [],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        title: {
          text: "State wise reported cases in India",
          align: "center",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"],
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: [],
        },
      },
    };
  }

  componentWillReceiveProps(nextProps) {
    var index,
      confirmed = [],
      state = [],
      data = nextProps.data;
    for (index = 0; index < data.length; index++) {
      state.push(data[index].state);
      confirmed.push(parseInt(data[index].confirmed));
    }
    this.setState({
      series: [
        {
          name: "Total Reported cases",
          data: confirmed,
        },
      ],
      options: {
        chart: {
          height: 450,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        title: {
          text: "State wise reported cases in India",
          align: "center",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"],
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: state,
        },
      },
    });
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={350}
          className="barchart"
        />
      </div>
    );
  }
}
