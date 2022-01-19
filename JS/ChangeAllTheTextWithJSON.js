//Page à propos//
const historyTitle = document.querySelector("#historyTitle");
const history = document.querySelector("#history");
//Fin de page à propos//

const changeText = (jsonObj) => {
  historyTitle.innerText = jsonObj["Apropos"][0];
  history.innerText = jsonObj["history"];
};

const requestURL =
  "https://raw.githubusercontent.com/TheMisterRedFox/CampusWorkshop2022-Team02/Romain/JSON/allTheText.json";
const request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function () {
  var AllTheJSONScript = request.response;
  changeText(AllTheJSONScript);
};
