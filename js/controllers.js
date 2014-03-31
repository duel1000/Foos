var myNameSpace = angular.module('myApp',[]);

myNameSpace.controller('MyController', function MyController($scope, $http){
	$http.get('js/names.json').success(function(data) {
		$scope.authors = data;
	});	
});