'use strict';

class ajaxQuest {
    constructor(method, url) {
        this.method = method;
        this.url = url;
    }
    ajax(method, url){
        const xhr =  new XMLHttpRequest();
        xhr.open(method, url, true);
    
        xhr.onreadystatechange = function() {
            if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                var resp = JSON.parse(xhr.response);
                console.log(resp);
            }
        }
        xhr.send();
    }
}

var getTodos = new ajaxQuest();
getTodos.ajax('GET', 'http://localhost:3000/todos');
