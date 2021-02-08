var express    = require('express');        
var app        = express();    
var jwt_decode = require('jwt-decode');

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomString() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

var cases = [
    { id:randomInteger(1100000,11200000 ), title: "Random Title -" + randomString()},
    { id:randomInteger(1100000,11200000 ), title: "Random Title -" + randomString()},
    { id:randomInteger(1100000,11200000 ), title: "Random Title -" + randomString()},
    { id:randomInteger(1100000,11200000 ), title: "Random Title -" + randomString()},
    { id:randomInteger(11100000,11200000 ), title: "Random Title -" + randomString()},
    { id:randomInteger(1100000,11200000 ), title: "Random Title -" + randomString()},
    { id:randomInteger(1100000,11200000 ), title: "Random Title -" + randomString()},
    { id:randomInteger(1100000,11200000 ), title: "Random Title -" + randomString()}
]

app.get('/', function(req, res) {

    if (req.headers['x-ms-token-aad-id-token'] === undefined && req.headers['x-ms-token-aad-access-token']=== undefined) {
        throw new Error("Missing x-ms-token-aad-id-token or x-ms-token-aad-access-token headers");
    }

    var token = req.headers['x-ms-token-aad-id-token'];
    const decodedToken = jwt_decode(token);

    var jsonResponse = { 
                        "alias": decodedToken.upn || decodedToken.unique_name, 
                        "name": decodedToken.name, 
                        "cases": cases
                    };

    res.json(jsonResponse);   
});

//Reaching Header Limits
app.get('/user', function(req, res) {

    if (req.headers['x-ms-token-aad-id-token'] === undefined && req.headers['x-ms-token-aad-access-token']=== undefined) {
        throw new Error("Missing x-ms-token-aad-id-token or x-ms-token-aad-access-token headers");
    }

    var token = req.headers['x-ms-token-aad-id-token'];
    var custom_header="";

    for( var i = 0; i < 40;i++ ){
        custom_header+= token;
    }

    res.set("Custom-Header", custom_header);

    const decodedToken = jwt_decode(token);

    var jsonResponse = { 
                        "alias": decodedToken.upn || decodedToken.unique_name, 
                        "name": decodedToken.name
                    };
                    
    res.json(jsonResponse);   
});

var port = process.env.PORT || 3000;    

app.listen(port, function () {
    console.log(`Server running at http://localhost:${port}`);
});