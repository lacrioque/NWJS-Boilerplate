"use strict";
/*globals angular, console, window, require */
angular.module('nwjsboilerplate', [
	'ngMaterial', 
	'ngRoute', 
	'ngMessages', 
	'nwjsboilerplate.controller', 
	'nwjsboilerplate.services',
	'nwjsboilerplate.directives'
	])
	.config(function($routeProvider, $locationProvider) {
		$routeProvider
		.when('/view', {
				templateUrl: 'templates/view.tpl.html',
				controller: 'mainViewCtrl'
				}
			)
			.when('/admin', {
				templateUrl: 'templates/admin.tpl.html',
				controller: 'adminCtrl'
				}
			)
			.when('/help', {
				templateUrl: 'templates/help.tpl.html',
				controller: 'helpCtrl'
				}
			)
			.otherwise({
				redirectTo: '/view'
				}
			);
	})
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('teal')
	.warnPalette('red')
	.backgroundPalette('deep-purple');
});