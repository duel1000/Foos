var myNameSpace = angular.module('myApp',[]);

myNameSpace.controller('MyController', function MyController($scope){
	$scope.author = {
		'name' : 'Martin Due',
		'title': 'Developer',
		'company':'Ditmer a/s'
	}
});