import React from "react";
import ReactApexChart from "react-apexcharts";

/**
 * 
 * @author Vinit Shahdeo <vinitshahdeo@gmail.com>
 */
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
          height: 750,
          type: "line",
          zoom: {
            enabled: false,
          },
          dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          },
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        title: {
          text: "State wise reported cases in India",
          align: "center",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"],
            opacity: 0.3,
          },
        },
        xaxis: {
          categories: state,
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            gradientToColors: [ '#FDD835'],
            shadeIntensity: 1,
            type: 'horizontal',
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100]
          },
        },
        markers: {
          size: 4,
          colors: ["#FFA41B"],
          strokeColors: "#fff",
          strokeWidth: 2,
          hover: {
            size: 7,
          }
        },
        colors: ['#FFA41B', '#545454'],
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
