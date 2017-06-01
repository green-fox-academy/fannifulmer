'use strict';

const button = document.querySelector('button');

const ajaxQuest = function () {
    const ajax = function(method, url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);

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

const ajaxPost = function() {
    const inputArea = document.querySelector('.input_box')
    const ajaxP = function(method, url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onreadystatechange = function() {
            if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                var response = JSON.parse(xhr.response);
                console.log(callback);
                callback(response);
            }
        }
        var newInput = {
            title: inputArea.value
        }
        xhr.send(JSON.stringify(newInput));
    };
    return {
        ajaxP
    };
};


const getTodos = function(){
    const ajax = ajaxQuest();
    const post = ajaxPost();
    const renderer = renderTodos();
    
    const getTodo = function() {
        const url = 'http://localhost:3000/todos'
        ajax.ajax('GET', url, function(response) {
            renderer.renderData(response);
        });
    }
        
    const postTodo = function() {
        const url2 = 'http://localhost:3000/todos'
        button.addEventListener('click', function(){
            post.ajaxP('POST', url2, function(response) {
                getTodo(response);
            })
        });
    }

    return {
        getTodo, 
        postTodo
    };
};


const renderTodos = function(){
    const todo_container = document.querySelector('.todo_item');
    
    const renderData = function(response) {
        const output = Mustache.render("{{#todos}} <div><h2>{{title}}</h2><img src='assets/trash_icon.png'><input type='checkbox'></div> {{/todos}}", {todos:response});
        todo_container.innerHTML = output;
    }
    return {
        renderData
    }
}

const app = getTodos();
app.getTodo();
app.postTodo();
