//Page à propos//
const historyTitle = document.querySelector("#historyTitle");
const history = document.querySelector("#history");
//Fin de page à propos//

const changeText = (jsonObj) => {
  historyTitle.innerText = jsonObj["historyTitle"];
  history.innerText = jsonObj["history"];
};

var requestURL =
  "https://raw.githubusercontent.com/TheMisterRedFox/CampusWorkshop2022-Team02/Romain/JSON/allTheText.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function () {
  var AllTheJSONScript = request.response;
  console.log(AllTheJSONScript);
  changeText(AllTheJSONScript);
};
