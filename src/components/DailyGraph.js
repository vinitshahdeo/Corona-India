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
    this.setState({
      series: [
        {
          name: "Confirmed today",
          data: nextProps.data,
        },
        {
          name: "Total so far",
          data: nextProps.total,
        },
        {
          name: "Recovered so far",
          data: nextProps.recovered,
        },
      ],
      options: {
        chart: {
          type: "area",
          height: 650,
          zoom: {
            enabled: false,
          },
        },
        toolbar: {
            show: false
        },
        dataLabels: {
          enabled: true,
        },
        dropShadow: {
            enabled: true,
            top: 0,
            left: 0,
            blur: 3,
            opacity: 0.5
        },
        stroke: {
          curve: "smooth",
        },
        title: {
          text: "Last 15 days reported COVID-19 cases",
          align: "center",
        },
        subtitle: {
          text: "Click on Blue, Green, Yellow dots below",
          align: "center",
        },
        labels: nextProps.series,
        xaxis: {
          type: "datetime",
        },
        yaxis: {
          opposite: false,
        },
        legend: {
          horizontalAlign: "center",
          position: 'top',
          onItemClick: {
            toggleDataSeries: true
          },
          onItemHover: {
            highlightDataSeries: true
          }
        }
      },
    });
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={370}
        />
      </div>
    );
  }
}
