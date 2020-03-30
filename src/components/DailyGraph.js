import React from "react";
import ReactApexChart from "react-apexcharts";

/**
 * 
 * @author Vinit Shahdeo
 */
export default class DailyGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Corona Cases",
          data: [],
        },
      ],
      options: {
        chart: {
          type: "area",
          height: 350,
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
          text: "Reported Corona cases on daily basis",
          align: "center",
        },
        subtitle: {
          text: "Last 15 days",
          align: "center",
        },
        labels: [],
        xaxis: {
          type: "datetime",
        },
        yaxis: {
          opposite: true,
        },
        legend: {
          horizontalAlign: "left",
        },
      },
    };
  }

  componentWillReceiveProps(nextProps) {
    this.state = {
      series: [
        {
          name: "Confirmed today",
          data: nextProps.data,
        },
        {
          name: "Total",
          data: nextProps.total,
        },
        {
          name: "Recovered today",
          data: nextProps.recovered,
        },
      ],
      options: {
        chart: {
          type: "area",
          height: 350,
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
          text: "Date wise reported COVID-19 cases",
          align: "center",
        },
        subtitle: {
          text: "Last 15 days",
          align: "center",
        },
        labels: nextProps.series,
        xaxis: {
          type: "datetime",
        },
        yaxis: {
          opposite: true,
        },
        legend: {
          horizontalAlign: "center",
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={350}
        />
      </div>
    );
  }
}
