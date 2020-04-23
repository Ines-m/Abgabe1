import "./styles.css";
//set url https://coronavirus-19-api.herokuapp.com/countries

const apiUrl = "https://coronavirus-19-api.herokuapp.com/countries";
const appDiv = document.getElementById("app");

async function loadData() {
  const response = await fetch(apiUrl);
  const countries = await response.json();

  let result = "";

  //console.log(data);

  const countriesSorted = countries.sort(function(a, b) {
    return b.deaths - a.deaths;
  });
  for (let country of countriesSorted) {
    result += country.country + " - Deaths: " + country.deaths + "<br>";
  }

  appDiv.innerHTML = result;
}

loadData();

// fetch to the console:
//fetch('https://coronavirus-19-api.herokuapp.com/countries')
//.then((response) => {
//return response.json();
//})
//.then((data) => {
//console.log(data);
//});
