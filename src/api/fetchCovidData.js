/**
 *
 * @author Vinit Shahdeo
 */
function fetchCovidData(cb) {
  fetch("https://api.covid19india.org/data.json")
    .then((res) => res.json())
    .then((data) => {
      // console.log("Fetched state wise data:", data.statewise);
      cb(data.statewise, data.key_values, data.cases_time_series);
    })
    .catch(console.log);
}

function fetchGlobalCovidData(cb) {
  var index = 0,
    countryData = [];
  fetch("https://corona.lmao.ninja/countries?sort=country")
    .then((res) => res.json())
    .then((data) => {
      for (index = 0; index < data.length; index++) {
        countryData.push({
          country: data[index].country,
          cases: data[index].cases,
          recovered: data[index].recovered,
          active: data[index].active,
          deaths: data[index].deaths,
        });
      }
      cb(countryData);
    })
    .catch(console.log);
}

export { fetchCovidData, fetchGlobalCovidData };
