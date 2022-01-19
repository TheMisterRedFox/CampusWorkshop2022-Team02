
//page d'accueil
const nav1 = document.querySelector(".nav1");
console.log(nav1.innerHTML);
const nav2 = document.querySelector(".nav2");
const nav3 = document.querySelector(".nav3");
const nav4 = document.querySelector(".nav4");
const nav5 = document.querySelector(".nav5");
const sentence =  document.querySelector("#sentence");
const container1 = document.querySelector("#container1");
const container2 =  document.querySelector("#container2");
const coll = document.querySelector("#coll");
const allow = document.querySelector(".allow");
const also = document.querySelector(".also");
const news = document.querySelector(".news");
const legal = document.querySelector(".legal");

const changeText = (jsonObj) => {

  nav1.innerHTML = jsonObj["nav1"];
  nav2.innerHTML = jsonObj[ "nav2"];
  nav3.innerHTML = jsonObj[ "nav3"];
  nav4.innerHTML = jsonObj[ "nav4"];
  nav5.innerHTML = jsonObj[ "nav5"];
  sentence.innerHTML = jsonObj[ "sentence"];
  container1.innerHTML = jsonObj[ "container1"];
  container2.innerHTML = jsonObj[ "container2"];
  coll.innerHTML = jsonObj[ "coll"];
  allow.innerHTML = jsonObj[ "allow"];
  also.innerHTML = jsonObj[ "also"];
  news.innerHTML = jsonObj[ "news"];
  legal .innerHTML = jsonObj[ "legal"];
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

