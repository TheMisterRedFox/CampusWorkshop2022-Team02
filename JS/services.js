//Pages services//
const ser_head_title_part1 = document.querySelector("#ser_head_title_part1");
const ser_head_title_number = document.querySelector("#ser_head_title_number");
const ser_head_title_part2 = document.querySelector("#ser_head_title_part2");
const ser_phase1 = document.querySelector("#ser_phase1");
const ser_phase1_description = document.querySelector(
  "#ser_phase1_description"
);
const ser_phase2 = document.querySelector("#ser_phase2");
const ser_phase2_description = document.querySelector(
  "#ser_phase2_description"
);
const ser_phase3 = document.querySelector("#ser_phase3");
const ser_phase3_description = document.querySelector(
  "#ser_phase3_description"
);
const ser_secondsection_head_title_part1 = document.querySelector(
  "#ser_secondsection_head_title_part1"
);
const ser_secondsection_head_title_part2 = document.querySelector(
  "#ser_secondsection_head_title_part2"
);
const ser_secondsection_head_title_bluetext = document.querySelector(
  "#ser_secondsection_head_title_bluetext"
);
const ser_secondsection_head_title_part3 = document.querySelector(
  "#ser_secondsection_head_title_part3"
);
const ser_service1 = document.querySelector("#ser_service1");
const ser_service1_description = document.querySelector(
  "#ser_service1_description"
);
const ser_service2 = document.querySelector("#ser_service2");
const ser_service2_description = document.querySelector(
  "#ser_service2_description"
);
const ser_service3 = document.querySelector("#ser_service3");
const ser_service3_description = document.querySelector(
  "#ser_service3_description"
);
const ser_service4 = document.querySelector("#ser_service4");
const ser_service4_description = document.querySelector(
  "#ser_service4_description"
);
const ser_service5 = document.querySelector("#ser_service5");
const ser_service5_description = document.querySelector(
  "#ser_service5_description"
);
const ser_service6 = document.querySelector("#ser_service6");
const ser_service6_description = document.querySelector(
  "#ser_service6_description"
);
const ser_service7 = document.querySelector("#ser_service7");
const ser_service7_description = document.querySelector(
  "#ser_service7_description"
);
const ser_service8 = document.querySelector("#ser_service8");
const ser_service8_description = document.querySelector(
  "#ser_service8_description"
);

const changeText = (jsonObj) => {
  ser_head_title_part1.innerText = jsonObj["ser_head_title_part1"];
  ser_head_title_number.innerText = jsonObj["ser_head_title_number"];
  ser_head_title_part2.innerText = jsonObj["ser_head_title_part2"];
  ser_phase1.innerText = jsonObj["ser_phase1"];
  ser_phase1_description.innerText = jsonObj["ser_phase1_description"];
  ser_phase2.innerText = jsonObj["ser_phase2"];
  ser_phase2_description.innerText = jsonObj["ser_phase2_description"];
  ser_phase3.innerText = jsonObj["ser_phase3"];
  ser_phase3_description.innerText = jsonObj["ser_phase3_description"];
  ser_secondsection_head_title_part1.innerText =
    jsonObj["ser_secondsection_head_title_part1"];
  ser_secondsection_head_title_part2.innerText =
    jsonObj["ser_secondsection_head_title_part2"];
  ser_secondsection_head_title_bluetext.innerText =
    jsonObj["ser_secondsection_head_title_bluetext"];
  ser_secondsection_head_title_part3.innerText =
    jsonObj["ser_secondsection_head_title_part3"];
  ser_service1.innerText = jsonObj["ser_service1"];
  ser_service1_description.innerText = jsonObj["ser_service1_description"];
  ser_service2.innerText = jsonObj["ser_service2"];
  ser_service2_description.innerText = jsonObj["ser_service2_description"];
  ser_service3.innerText = jsonObj["ser_service3"];
  ser_service3_description.innerText = jsonObj["ser_service3_description"];
  ser_service4.innerText = jsonObj["ser_service4"];
  ser_service4_description.innerText = jsonObj["ser_service4_description"];
  ser_service5.innerText = jsonObj["ser_service5"];
  ser_service5_description.innerText = jsonObj["ser_service5_description"];
  ser_service6.innerText = jsonObj["ser_service6"];
  ser_service6_description.innerText = jsonObj["ser_service6_description"];
  ser_service7.innerText = jsonObj["ser_service7"];
  ser_service7_description.innerText = jsonObj["ser_service7_description"];
  ser_service8.innerText = jsonObj["ser_service8"];
  ser_service8_description.innerText = jsonObj["ser_service8_description"];
};

var requestURL =
  "https://raw.githubusercontent.com/TheMisterRedFox/CampusWorkshop2022-Team02/main/JSON/services.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function () {
  var AllTheJSONScript = request.response;
  console.log(AllTheJSONScript);
  changeText(AllTheJSONScript);
};
