'use strict'

const express = require('express');
const cfenv = require('cfenv');
const bodyParser = require('body-parser');

let app = express();

module.exports = () => {

    app.set('views', __dirname + '/../views');
    app.set('view engine', 'ejs');
    app.engine('html', require('ejs').renderFile);

    app.use(express.static(__dirname + '/../public'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.get('/', function(req, res) {
        res.render('index.html');
    });
	
    // get the app environment from Cloud Foundry
    var appEnv = cfenv.getAppEnv();
    app.listen(appEnv.port, '0.0.0.0', function() {
        console.log("server starting on " + appEnv.url);
    });

    return app;

}