'use strict';
const todo_container = document.querySelector('.todo_item');

const ajaxQuest = function () {
    const ajax = function(method, url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.onreadystatechange = function() {
            if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                var response = JSON.parse(xhr.response);
                callback(response);
            }
        }
        xhr.send();
    };

    return {
        ajax
    };
};

const renderTodos = function(){
    const ajax = ajaxQuest();
    
    const renderTodo = function() {
        const url = 'http://localhost:3000/todos'
        ajax.ajax('GET', url, function(response) {
            console.log(response);
        });

    }
    return {
        renderTodo
    };
};

const app = renderTodos();
app.renderTodo();


