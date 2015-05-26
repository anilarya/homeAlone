'use strict';

/**
 * @ngdoc service
 * @name homealoneApp.dashboard
 * @description
 * # dashboard
 * Factory in the homealoneApp.
 */
angular.module('homeAloneApp')
  .factory('dashboard', function ($http, $log ) {
    // Service logic
    // ...
    return { 
        fetchLocation: function () {  
                var url = '/data/location.json';  //Your own Rest APIs 
                
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
