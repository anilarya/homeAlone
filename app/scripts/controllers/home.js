'use strict';

/**
 * @ngdoc function
 * @name homealoneApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the homealoneApp
 */
angular.module('homeAloneApp')
  .controller('HomeCtrl', function ($scope, $cookies, $cookieStore, $stateParams, $timeout, home) {
    
    $scope.model = {
    	activate_all : true ,
    	activate_veg :false , 
    	activate_non_veg :false ,
      selected_menu : []
    }
    // $scope.model.selected_menu[0] = {};s

    $scope.fetchMenuCategory = function(category){
    	if(category == 'all'){
    		$scope.model.activate_all = true;
    		$scope.model.activate_male = false;
    		$scope.model.activate_female = false;

    	}
    	else if(category == 'male'){
    		$scope.model.activate_all = false;
    		$scope.model.activate_male = true;
    		$scope.model.activate_female = false;
    		$scope.model.gender = "male"
    	}
    	else if(category == 'female'){
    		$scope.model.activate_all = false;
    		$scope.model.activate_male = false;
    		$scope.model.activate_female = true;
    		$scope.model.gender = "female"

    	}
    }
 

    var fetchMenus = function(){ 
      var keyword = $stateParams.location;
       if(keyword){
        $scope.keyword = $stateParams.location;
       }
       else{
         alert("choose location") ; 
       }
      home.fetchMenus().success(function (results) {
      	angular.forEach(results.results, function(value, key) {
              if ( $scope.keyword === key) {  
                  $scope.model.menuResults = value ;
              }
          });
          console.log("$scope.model.menuResults",$scope.keyword, $scope.model.menuResults );
      }).error(function (err) { 
          alert("err", err);
      });
	} 

 

  // $timeout(function () {
  //   $scope.$apply(function () {
  //       $scope.model.choosen_location = $cookieStore.get('location');
  //       console.log("$scope.model.choosen_location",$scope.model.choosen_location);
  //   });
  // }, 2000);


    var init = function () {
      console.log('menu.init()');
      fetchMenus();  
    }();
 
  });
