'use strict';

var position =  new XMLHttpRequest();

position.open('GET', 'https://devru-latitude-longitude-find-v1.p.mashape.com/latlon.php', true);

position.setRequestHeader('X-Mashape-Key', '7GNuMouXa4mshRJCiPN0VvBm1Lxop1ZuUs8jsn2QDDZmFbYy1t');

position.onreadystatechange = function () {
        if(position.readyState === XMLHttpRequest.DONE && position.status === 200) {
            var resp = JSON.parse(position.response);
            console.log(resp);
            }
        }
position.send();