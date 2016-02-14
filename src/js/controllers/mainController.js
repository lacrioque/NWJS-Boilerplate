/*globals angular, console, window, require */
angular.module('nwjsboilerplate.controller.mainController', [])
.controller('mainCtrl', ["$scope","$mdSidenav",function($scope, $mdSidenav){
	const 
		toggleSidenav = function(){
			$mdSidenav("mainNav").toggle();
		};
	$scope.toggleSidenav = toggleSidenav;
	$scope.menubuttons = [
		//Insert Menubuttons at will
		{
			name : "View",
			action: "/#view",
			classes : ""
		},
		{
			name : "Admin",
			action: "/#admin",
			classes : ""
		},
		{
			name : "Help",
			action: "/#help",
			classes : ""
		},
	];
	
}]);