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

const ajaxDelete = function() {
    
    const ajaxD = function(method, url, id, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url + '/' + id, true);
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.setRequestHeader('Content-Type', 'application/json');    

        xhr.onreadystatechange = function() {
            if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                var response = JSON.parse(xhr.response);
                callback(response);
            }
        }
        xhr.send();
    };
    return {
        ajaxD
    };
};

const ajaxPut = function () {
    const putAjax = function(method, url, id, state, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url + '/' + id, true);
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.setRequestHeader('Content-Type', 'application/json');    

        xhr.onreadystatechange = function() {
            if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                var response = JSON.parse(xhr.response);
                callback(response);
            }
        }
        if (state == 1){
            console.log(state);
            var stateData = {
                state: 0
            }
        }
        if (state == 0) {
            var stateData = {
                state: 1
            }
        }
        xhr.send(JSON.stringify(stateData));
    }
    return {
        putAjax
    }; 
};


const getTodos = function(){
    const ajax = ajaxQuest();
    const post = ajaxPost();
    const renderer = renderTodos();
    const deleted = ajaxDelete();
    const put = ajaxPut();
    
    const getTodo = function() {
        const url = 'http://localhost:3000/todos'
        ajax.ajax('GET', url, function(response) {
            renderer.renderData(response);
        });
    }
        
    const postTodo = function() {
        const url = 'http://localhost:3000/todos'
        button.addEventListener('click', function(){
            post.ajaxP('POST', url, function(response) {
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
    
    const putTodo = function() {
        const todoImage = document.querySelectorAll('.checker');
        todoImage.forEach(function(checking){
            checking.addEventListener('click', function(){
                const url = 'http://localhost:3000/todos'
                let id = checking.dataset.id;
                let state = checking.dataset.state;
                put.putAjax('PUT', url, id, state, function(response) {
                    getTodo(response);
                });
            });
        });
    }
    
    const stateChecker = function() {
        const todoImage = document.querySelectorAll('.checker');
        todoImage.forEach(function(checking){
            let state = checking.dataset.state;
            if (state == 1){
                checking.setAttribute('src', 'assets/checked.png');
            } else {
                checking.setAttribute('src', 'assets/unchecked.png');
            }
        });    
    };
    
    return {
        getTodo, 
        postTodo,
        deleteTodo,
        putTodo, 
        stateChecker
    };
};

const renderTodos = function(){
    const todo_container = document.querySelector('.todo_item');
    
    const renderData = function(response, url) {
        const output = Mustache.render("{{#todos}} <div class='aligner'><h2>{{title}}</h2><div><img src='assets/trash_icon.png' class='delete' data-id={{id}}><img src='assets/unchecked.png' class='checker' data-id={{id}} data-state={{state}}></img></div></div> {{/todos}}", {todos:response});
        todo_container.innerHTML = output;
        app.deleteTodo();
        app.stateChecker();
        app.putTodo();
    }
    return {
        renderData
    }
}


const app = getTodos();
app.getTodo();
app.postTodo();
