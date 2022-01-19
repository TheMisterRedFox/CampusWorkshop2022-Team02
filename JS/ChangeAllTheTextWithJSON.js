const historyTitle = document.querySelector("#historyTitle");
const history = document.querySelector("#history");

const changeText = (jsonObj) => {
  historyTitle.innerText = jsonObj["historyTitle"];
  history.innerText = jsonObj["history"];
};

const requestURL ="C:\Users\Utilisateur\Documents\GitHub\CampusWorkshop2022-Team02\JSON\allTheText.json"
const request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function () {
  var AllTheJSONScript = request.response;
  changeText(AllTheJSONScript);
};
