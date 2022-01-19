//Page à propos//
const ap_historyTitle = document.querySelector("#historyTitle");
const ap_history = document.querySelector("#history");
const ap_ourValues = document.querySelector("#ap_ourValues");
const ap_value1 = document.querySelector("#ap_value1");
const ap_value2 = document.querySelector("#ap_value2");
const ap_value3 = document.querySelector("#ap_value3");
const ap_value4 = document.querySelector("#ap_value4");
const ap_information1 = document.querySelector("#ap_information1");
const ap_information1_description = document.querySelector(
  "#ap_information1_description"
);
const ap_information2 = document.querySelector("#ap_information2");
const ap_information2_description = document.querySelector(
  "#ap_information2_description"
);
const ap_information3 = document.querySelector("#ap_information3");
const ap_information3_description = document.querySelector(
  "#ap_information3_description"
);
const section3_title = document.querySelector("#section3_title");
const ap_section3_picture1 = document.querySelector("#ap_section3_picture1");
const ap_section3_picture1_description = document.querySelector(
  "#ap_section3_picture1_description"
);
const ap_section3_picture2 = document.querySelector("#ap_section3_picture2");
const ap_section3_picture2_description = document.querySelector(
  "#ap_section3_picture2_description"
);
const ap_section3_picture3 = document.querySelector("#ap_section3_picture3");
const ap_section3_picture3_description = document.querySelector(
  "#ap_section3_picture3_description"
);
const ap_section3_picture4 = document.querySelector("#ap_section3_picture4");
const ap_section3_picture4_description = document.querySelector(
  "#ap_section3_picture4_description"
);
const ap_section3_picture5 = document.querySelector("#ap_section3_picture5");
const ap_section3_picture5_description = document.querySelector(
  "#ap_section3_picture5_description"
);
const ap_section3_picture6 = document.querySelector("#ap_section3_picture6");
const ap_section3_picture6_description = document.querySelector(
  "#ap_section3_picture6_description"
);

//Fin de page à propos//

const changeText = (jsonObj) => {
  historyTitle.innerText = jsonObj["historyTitle"];
  history.innerText = jsonObj["history"];
  ap_ourValues.innerText = jsonObj["ap_ourValues"];
  ap_value1.innerText = jsonObj["ap_value1"];
  ap_value2.innerText = jsonObj["ap_value2"];
  ap_value3.innerText = jsonObj["ap_value3"];
  ap_value4.innerText = jsonObj["ap_value4"];
  ap_information1.innerText = jsonObj["ap_information1"];
  ap_information1_description.innerText =
    jsonObj["ap_information1_description"];
  ap_information2.innerText = jsonObj["ap_information2"];
  ap_information2_description.innerText =
    jsonObj["ap_information2_description"];
  ap_information3.innerText = jsonObj["ap_information3"];
  ap_information3_description.innerText =
    jsonObj["ap_information3_description"];
  section3_title.innerText = jsonObj["section3_title"];
  ap_section3_picture1.innerText = jsonObj["ap_section3_picture1"];
  ap_section3_picture1_description.innerText =
    jsonObj["ap_section3_picture1_description"];
  ap_section3_picture2.innerText = jsonObj["ap_section3_picture2"];
  ap_section3_picture2_description.innerText =
    jsonObj["ap_section3_picture2_description"];
  ap_section3_picture3.innerText = jsonObj["ap_section3_picture3"];
  ap_section3_picture3_description.innerText =
    jsonObj["ap_section3_picture3_description"];
  ap_section3_picture4.innerText = jsonObj["ap_section3_picture4"];
  ap_section3_picture4_description.innerText =
    jsonObj["ap_section3_picture4_description"];
  ap_section3_picture5.innerText = jsonObj["ap_section3_picture5"];
  ap_section3_picture5_description.innerText =
    jsonObj["ap_section3_picture5_description"];
  ap_section3_picture6.innerText = jsonObj["ap_section3_picture6"];
  ap_section3_picture6_description.innerText =
    jsonObj["ap_section3_picture6_description"];
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
