// hacked by @vinitshahdeo
function getCoronaIndianData(data) {
  var confirmed = 0,
    deaths = 0,
    cured = 0,
    index;
  for (index = 0; index < data.length; index++) {
    confirmed +=
      parseInt(data[index].confirmed_foreign_nationals) +
      parseInt(data[index].confirmed_indian);
    cured += parseInt(data[index].cured);
    deaths += parseInt(data[index].deaths);
  }
  // console.log(cured, confirmed, deaths);
  return [
    {
      color: "#E38627",
      title: "Confirmed Cases",
      value: confirmed,
    },
    {
      color: "#C13C37",
      title: "Deaths",
      value: deaths,
    },
    {
      color: "#6A2135",
      title: "cured",
      value: cured,
    },
  ];
}

function getCurrentStats (total, deaths, cured, active) {
  return [
    {
      color: "#ffc107",
      title: "Confirmed Cases",
      value: total,
    },
    {
      color: "#dc3545",
      title: "Deaths",
      value: deaths,
    },
    {
      color: "#6c757d",
      title: "cured",
      value: cured,
    },
    {
      color: "#17a2b8",
      title: "active",
      value: active,
    }
  ];
}

function getDailyData (data) {
  console.log(data);
  var date = [],
    confirmed = [],
    total = [],
    recovered = [],
    index;
  for(index = 0 ; index <data.length; index++) {
    date.push(data[index].date);
    confirmed.push(data[index].dailyconfirmed);
    total.push(data[index].totalconfirmed);
    recovered.push(data[index].dailyrecovered);
  }
  return {
    date: date.splice(-15),
    confirmed: confirmed.splice(-15),
    total: total.splice(-15),
    recovered: total.splice(-15)
  }
}

export { getCoronaIndianData, getCurrentStats, getDailyData };
