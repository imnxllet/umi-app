 var http = require('http');

 module.exports.google = function (callback) {

   var req = http.request({

        host: 'zhenyong.lu:Ytt24241821@192.168.138.60',

       port: 8080,

         path: 'www.google.com',

        method: 'GET'

     }, function (res) {

      console.log('STATUS: ' + res.statusCode);

        console.log('HEADERS: ' + JSON.stringify(res.headers));

     res.setEncoding('utf8');

         res.on('data', function (chunk) {
          console.log('BODY: ' + chunk);

     });

        res.on('end', function () {

            callback(null);

        });

     });

     req.on('error', function(e) {

        console.log('problem with request: ');
        console.log(JSON.stringify(e));

        callback(e);

    });

      req.end();

};