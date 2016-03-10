(function(){
	var app = angular.module('mySiteApp', []);
	
	app.directive("aboutMe", function(){
		return {
			restrict: 'E',
			templateUrl: 'html-directives/about-me.html'
		};
	});
})();