(function(){
	var app = angular.module('mySiteApp', []);
	
	app.directive("header", function(){
		return {
			restrict: 'E',
			templateUrl: 'html-directives/header.html'
		};
	});

	app.directive("aboutMe", function(){
		return {
			restrict: 'E',
			templateUrl: 'html-directives/about-me.html'
		};
	});
	
	app.directive("connect", function(){
		return {
			restrict: 'E',
			templateUrl: 'html-directives/connect.html'
		};
	});
})();