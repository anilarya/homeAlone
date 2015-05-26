'use strict';

/**
 * @ngdoc service
 * @name homealoneApp.dashboard
 * @description
 * # dashboard
 * Factory in the homealoneApp.
 */
angular.module('homeAloneApp')
  .factory('home', function ($http, $log ) {
    // Service logic
    // ...
    return { 
        fetchMenus: function () {  
                var url = '/data/home.json';  //Your own Rest APIs 
                
                var promise = $http({
                    url :url,
                    method : "GET",
                    format : "json", 
                }).success(function (result) { 
                    console.log("result data", result)
                }).error(function (err) {
                        console.log(err);
                });

                return promise;
            },
    }
 
  });
