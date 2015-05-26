'use strict';

/**
 * @ngdoc function
 * @name homealoneApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the homealoneApp
 */
angular.module('homeAloneApp')
  .controller('DashboardCtrl', function ($scope, $cookies,$cookieStore,$rootScope, $state, $location, dashboard) {
    
  	$scope.model = {
  		location : [] ,
      choosen_location : ""
  	}  


    $scope.locationOptions = {
          placeholder: "Select Location...",
          dataTextField: "location", 
          dataValueField: "id", 
        };

    $scope.locationDataSource = { 
        transport: {
                // read: "/scripts/data/products/gaprofile.json",
                read: function(options) { 
                  dashboard.fetchLocation().success(function (results) {
                      $scope.model.location = results.results; 
                      console.log("fetchLocation results",results.results );
                      options.success(results.results)
                  }).error(function (campaignData) { 
                      
                  });
              }
          }
    }

    $scope.fetchHomes = function(){
      $state.go("home" ,  {"location" : $scope.model.selectedLocation});
    }

    $scope.onLocSelection = function(e){
      console.log("data", e.sender.value())

    }
 
    $scope.fetchMenuFromLocation = function(location , id){ 
      console.log("id", location, id)
      $scope.model.choosen_location = location ; 
      $cookieStore.put('location', location);
      $scope.$emit('someEvent', [1,2,3]);
      $state.go('menu');
    }

    $scope.isActive = function(route) {
        return route === $location.path();
    } 
                 
    var init = function () {
      console.log('DashboardCtrl.init()'); 
    }();

  });
