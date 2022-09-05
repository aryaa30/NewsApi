// 'use strict';
console.log('news for all');

//17391b711be94852825e5846c405eda9
let source = 'in';
let apiKey = '17391b711be94852825e5846c405eda9';
//17391b711be94852825e5846c405eda9

//grab the news container
let newsacc1id = document.getElementById("newsacc1id");
const xhr = new XMLHttpRequest();
//create the request

xhr.open(`GET`,`https://newsapi.org/v2/top-headlines?country=${source}&apiKey=${apiKey}` , true);

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log('articles');
    let newsHtml = "";
    
    articles.forEach(function(element,index) {
      let news = `<div class="newsacc1" id="newsacc1id">
      <div class="row">
      <div class="col-sm-6">
        <div class="card" id="card-img${index}">
        <img src="${element["urlToImage"]}" class="card-img-top" alt="...">
          <div class="card-body">
          <p class="main-title"> ${index}</p>
            <h5 class="card-title">${element["title"]}</h5>
            <p class="card-text">${element["content"]}. <a href="${element['url']}" target="_blank" > . Read more here ..</a></p>
           </div>
           </div>
          </div>
        </div>
      </div>`

      newsHtml += news;
     
    })
   
    newsacc1id.innerHTML = newsHtml;
  }
 else {
    console.log("Some error occured");
 }
}

xhr.send();

