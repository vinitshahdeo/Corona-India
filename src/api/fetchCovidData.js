function fetchCovidData(cb) {
    fetch("https://api.covid19india.org/data.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log("Fetched state wise data:", data.statewise);
        cb(data.statewise, data.key_values);
      })
      .catch(console.log);
  }
  
  export { fetchCovidData };
  