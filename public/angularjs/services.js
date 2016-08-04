var services = angular.module('services',[]);

// 封装Http请求
services.factory('httpRequest', function($http) {
    return {
        request: function (method,url,param,successDo,errorDo) {
            var request_object = { method: method,url: url };
            //注意: 只有GET方法传参使用params其他都用data
            "GET" === method ? request_object.params = param : request_object.data = param;
            $http(request_object).then(function successCallback(response) {
                successDo(response.data);
            }, function errorCallback(response) {
                errorDo(response);
            });
        },
        get: function (url,param,successDo,errorDo) {
            this.request("GET",url,param,successDo,errorDo);
        },
        post: function (url,param,successDo,errorDo) {
            this.request("POST",url,param,successDo,errorDo);
        },
        delete: function (url,param,successDo,errorDo) {
            this.request("DELETE",url,param,successDo,errorDo);
        }
    }
});

// User Service
services.factory('userService', function(httpRequest) {
    return {
        current: function (callback) {
            httpRequest.get('api/user/current',{},function (data) {
                callback(data);
            });
        },
        login: function (param,callback) {
            httpRequest.post('api/user/login',param,function (data) {
                callback(data);
            });
        },
        logout: function (callback) {
            httpRequest.delete('api/user/logout',{},function (data) {
                callback(data);
            });
        }
    }
});