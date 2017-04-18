'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var app = require('./config/express')();

app.post('/conversar', function(req, res) {

    var mensagem = req.body;
    var context = mensagem.contexto;

});