
//page d'accueil
let offer = document.querySelector(".offer");
console.log(offer.innerText);

const changeText = (jsonObj) => {

  offer.innerText = jsonObj["offer"];
  
};

let requestURL = "https://github.com/TheMisterRedFox/CampusWorkshop2022-Team02/tree/regine/JSON"
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();


request.onload = function () {
  var AllTheJSONScript = request.response;
  changeText(AllTheJSONScript);
};

