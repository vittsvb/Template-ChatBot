'use strict'

var Promise = require('promise');
var config = require('../config/watson-config.js');

var conversation = require('watson-developer-cloud').conversation({
    username: config.watsonUserName,
    password: config.watsonPassword,
    version: config.watsonApiVersion,
    version_date: config.watsonApiVersionDate
});

exports.conversar = function (texto, contexto) {
    console.log('texto: ' + texto + ' contexto ' + contexto);
    return new Promise((resolve, reject) => {

        let data = {
            payload: {
                workspace_id: config.watsonWorkspaceId,
                input: {
                    text: texto
                },
                context: contexto
            }
        };

        console.log('ENVIANDO ' + JSON.stringify(data));
        conversation.message(data.payload, function (err, response) {
            if (err) {
                reject(err);
            } else {
                console.log('RESPONSE ' + JSON.stringify(response));
                resolve(response);
            }
        });
    });
}