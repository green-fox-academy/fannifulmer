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
        headlines.innerHTML = headerData[i].headline.main;
        headlines.setAttribute('href', headerData[i].web_url);
        
        let snippet = document.createElement('p');
        snippet.innerHTML = headerData[i].snippet;
        snippet.classList.add("snippet");
        
        let publicationDate = document.createElement('p');
        publicationDate.innerHTML = headerData[i].pub_date;
        
        
        wrapper.appendChild(listheadlines);
        listheadlines.appendChild(headlines);
        listheadlines.appendChild(snippet);
        listheadlines.appendChild(publicationDate);
    }
}

