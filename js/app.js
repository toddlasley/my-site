(function(){
	var app = angular.module('mySiteApp', []);
	
    app.controller('headerController', function() {
        this.email = 'todd.r.lasley@gmail.com';
    });

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