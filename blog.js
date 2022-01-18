let blogPicture = document.querySelectorAll("blogPicture");
let blog = document.querySelectorAll("blogs");

const requestUrl = "./blog.json";
const request = new XMLHttpRequest();

request.open("GET", requestUrl);

request.responseType = "json";
request.send();

request.onload = function () {
  let article = request.response;
  addImage(article);
  addContent(article);
};

function addImage(jsonObj) {
  let picture = document.createElement("img");
  picture.textContent = jsonObj["picture"];
  blogPicture.appendChild(picture);
}

function addContent(jsonObj) {
  let articles = jsonObj["articles"];

  for (let i = 0; i < articles.length; i++) {
    let myArticle = document.createElement("article");
    let myTitle = document.createElement("h2");
    let myDescription = document.createElement("p");
    let myDate = document.createElement("h4");

    myTitle.textContent = articles[i].headName;
    myDescription.textContent = articles[i].description;
    myDate.textContent = articles[i].date;

    myArticle.appendChild(myTitle);
    myArticle.appendChild(myDescription);
    myArticle.appendChild(myDate);

    blog.appendChild(myArticle);
  }
}
