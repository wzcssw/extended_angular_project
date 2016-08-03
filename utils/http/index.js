const http = require('http');
const querystring = require('querystring');
const config = require('../../config');
const md5 = require('md5');


function request(method,path,params) {
    return new Promise((resolve,reject)=>{
        var timestemp = getTimeStemp();
        var app_token = config.app_token;
        var access_token ='41b322e596ae';
        var sign = getSign(access_token,app_token,timestemp);

        params.app_token = app_token;
        params.access_token = access_token;
        params.timestemp = getTimeStemp();
        params.sign = sign;
        var postData = querystring.stringify(params);
        var options = {
            hostname: config.api_host,
            port: config.api_port,
            path: path,
            method: method,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(postData)
            }
        };
        var req = http.request(options, (res) => {
            var result = "";
            res.setEncoding('utf8');
            res.on('data',(chunk)=>{
                result += chunk;
            });
            res.on('end', () => {
                var status_code = parseInt(res.statusCode / 100);
                if(2 === status_code || 2 === status_code){
                // if(200 === res.statusCode){
                    resolve(JSON.parse(result));
                }else{
                    console.log(res.statusCode);
                    console.log(result)
                    console.log(status_code)
                    reject(JSON.parse(result));
                }
            });
        });
        req.write(postData);
    });
}

function getTimeStemp() {
    // 这里为了和ruby的Time.now.to_i的位数相一致(js比ruby多3位)
    return parseInt( new Date().getTime()/1000 );
}

function getSign(access_token,app_token,timestemp) {
    return md5(`${access_token}${app_token}${timestemp}`);
}

module.exports = {
    get: function *(path,params) {
         return yield request('GET',path,params);
    },
    post: function *(path,params) {
         return yield request('POST',path,params);
    },
    delete: function *(path,params) {
        return yield request('DELETE',path,params);
    }
}




