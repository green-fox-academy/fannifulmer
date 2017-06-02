'use strict';

const button = document.querySelector('button');

const ajaxQuest = function () {
    const openAjax = function() {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                var response = JSON.parse(xhr.response);
                callback(response);
            };
        };
    };
    
    const ajax = function(method, url, callback) {
        xhr.open(method, url, true);
        xhr.send();
    };

    const ajaxPost = function() {
        const inputArea = document.querySelector('.input_box')
        xhr.open(method, url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        var newInput = {
            title: inputArea.value
        }
        xhr.send(JSON.stringify(newInput));
    };
    
    const ajaxD = function(method, url, id, callback) {
        xhr.open(method, url + '/' + id, true);
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.setRequestHeader('Content-Type', 'application/json');    
        xhr.send();
    };
    
    return {
        openAjax,
        ajax, 
        ajaxPost, 
        ajaxD
    };
};


const getTodos = function(){
    const ajax = ajaxQuest();
    // const post = ajaxPost();
    // const renderer = renderTodos();
    // const deleted = ajaxDelete();
    
    const getTodo = function() {
        const url = 'http://localhost:3000/todos'
        ajax.ajax('GET', url, function(response) {
            renderer.renderData(response);
        });
    }
        
    const postTodo = function() {
        const url = 'http://localhost:3000/todos'
        button.addEventListener('click', function(){
            ajax.ajaxPost('POST', url, function(response) {
                getTodo(response);
            })
        });
    }
    
    const deleteTodo = function() {
        const trashimage = document.querySelectorAll('.delete');
        trashimage.forEach(function(deletedImage){
            deletedImage.addEventListener('click', function(){
                const url = 'http://localhost:3000/todos'
                let id = deletedImage.dataset.id
                deleted.ajaxD('DELETE', url, id, function(response) {
                getTodo(response);
                });
            });
        })
    }
    
    // const putTodo = function() {
    //     
    // }

    return {
        getTodo, 
        postTodo,
        deleteTodo
    };
};

const renderTodos = function(){
    const todo_container = document.querySelector('.todo_item');
    
    const renderData = function(response, url) {
        const output = Mustache.render("{{#todos}} <div class='aligner'><h2>{{title}}</h2><div><img src='assets/trash_icon.png' class='delete' data-id={{id}}><img src='assets/unchecked.png'></img></div></div> {{/todos}}", {todos:response});
        todo_container.innerHTML = output;
        app.deleteTodo();
    }
    return {
        renderData
    }
}


const app = getTodos();
app.getTodo();
app.postTodo();
