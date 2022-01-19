
//page d'accueil
const nav1 = document.querySelector(".nav1");
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
const newsletter = document.querySelector(".news");
const legal = document.querySelector(".legal");

const changeText = (jsonObj) => {
  //page d'accueil
  nav1.innerText = jsonObj["nav1_en"];
  nav2.innerText = jsonObj[ "nav2_en"];
  nav3.innerText = jsonObj[ "nav3_en"];
  nav4.innerText = jsonObj[ "nav4_en"];
  nav5.innerText = jsonObj[ "nav5_en"];
  sentence.innerText = jsonObj[ "sentence_en"];
  container1.innerText = jsonObj[ "container1_en"];
  container2.innerText = jsonObj[ "container2_en"];
  coll.innerText = jsonObj[ "coll_en"];
  allow.innerText = jsonObj[ "allow_en"];
  also.innerText = jsonObj[ "also_en"];
  newsletter.innerText = jsonObj[ "news_en"];
  legal .innerText = jsonObj[ "legal_en"];
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

