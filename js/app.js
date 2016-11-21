(function(){
	var app = angular.module('mySiteApp', []);
	
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
	
	app.directive("thisSite", function(){
		return {
			restrict: 'E',
			templateUrl: 'html-directives/this-site.html'
		};
	});
	app.directive("portfolio", function(){
		return {
			restrict: 'E',
			templateUrl: 'html-directives/portfolio.html'
		};
	});
})();