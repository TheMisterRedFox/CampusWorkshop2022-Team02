
//page d'accueil
let offer = document.querySelector(".offer");
console.log(offer.innerText);

const changeText = (jsonObj) => {

  offer.innerText = jsonObj["offer"];
  
};

var requestURL =
  "https://raw.githubusercontent.com/TheMisterRedFox/CampusWorkshop2022-Team02/regine/JSON/allTheText.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();


request.onload = function () {
  var AllTheJSONScript = request.response;
  changeText(AllTheJSONScript);
};

