
//page d'accueil

const sentence =  document.querySelector("#sentence");
console.log(sentence.innerText)


const changeText = (jsonObj) => {

  
  sentence.innerText = jsonObj[ "sentence_en"];
  
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

