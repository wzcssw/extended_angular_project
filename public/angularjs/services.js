var services = angular.module('services',[]);

// 封装Http请求
services.factory('httpRequest', function($http) {
    return {
        request: function (method,url,param,successDo,errorDo) {
            var request_object = { method: method,url: url };
            //注意: GET和DELETE方法传参使用params其他都用data
            ("GET" === method || "DELETE" === method)? request_object.params = param : request_object.data = param;
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
        },
        put: function(url,param,successDo,errorDo) {
            this.request("PUT",url,param,successDo,errorDo);
        }
    }
});

// User Service
services.factory('userService', function(httpRequest) {
    return {
        current: function (param,successDo,errorDo) {
            httpRequest.get('api/user/current',param,function (data) {
                successDo(data);
            },function (data) {
                errorDo(data);
            });
        },
        list: function (param,successDo,errorDo) {
            httpRequest.get('api/user/list',param,function (data) {
                successDo(data);
            },function (data) {
                errorDo(data);
            });
        },
        login: function (param,successDo,errorDo) {
            httpRequest.post('api/user/login',param,function (data) {
                successDo(data);
            },function (data) {
                errorDo(data);
            });
        },
        logout: function (param,successDo,errorDo) {
            httpRequest.delete('api/user/logout',param,function (data) {
                successDo(data);
            },function (data) {
                errorDo(data);
            });
        },
        delete: function (param,successDo,errorDo) {
            httpRequest.delete('api/user/delete',param,function (data) {
                successDo(data);
            },function (data) {
                errorDo(data);
            });
        },
        update: function (param,successDo,errorDo) {
            httpRequest.put('api/user/update',param,function (data) {
                successDo(data);
            },function (data) {
                errorDo(data);
            });
        }
    }
});


// RolePrivilege Service
services.factory('rolePrivilegeService', function(httpRequest) {
    return {
        role_list: function (param,successDo,errorDo) {
            httpRequest.get('api/role_privilege/role_list',param,function (data) {
                successDo(data);
            },function (data) {
                errorDo(data);
            });
        },
        privilege_list: function (param,successDo,errorDo) {
            httpRequest.get('api/role_privilege/privilege_list',param,function (data) {
                successDo(data);
            },function (data) {
                errorDo(data);
            });
        }
    }
});