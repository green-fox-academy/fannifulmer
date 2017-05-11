'use strict';
var newyorkTimes =  new XMLHttpRequest();
var wrapper = document.querySelector('.wrapper')
newyorkTimes.open('GET', 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=moon+landing+by+Apollo+11&api_key=2cccf4def763418d933793e8a1f01630', true);

newyorkTimes.onreadystatechange = function () {
        if(newyorkTimes.readyState === XMLHttpRequest.DONE && newyorkTimes.status === 200) {
            var resp = JSON.parse(newyorkTimes.response);
            headlinesCreater(resp.response.docs);
            console.log(resp);
            }
        }
newyorkTimes.send();

var headlinesCreater = function(headerData) {
    for (let i = 0; i < 9; i++){
        let listheadlines = document.createElement('li')
        let headlines = document.createElement('a');
        let snippet = document.createElement('p');
        let publicationDate = document.createElement('p');
        snippet.classList.add("snippet");
        
        headlines.innerHTML = headerData[i].headline.main;
        snippet.innerHTML = headerData[i].snippet;
        publicationDate.innerHTML = headerData[i].pub_date;
        headlines.setAttribute('href', headerData[i].web_url);
        
        wrapper.appendChild(listheadlines);
        listheadlines.appendChild(headlines);
        listheadlines.appendChild(snippet);
        listheadlines.appendChild(publicationDate);
        console.log(headlines);
    }
}

