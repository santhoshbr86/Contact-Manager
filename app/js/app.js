(function(){
var  app = angular.module("contactManager", ['ngRoute', 'home', 'contactMod']);
app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider){
	$routeProvider.
		when('/contacts', {
			templateUrl:'app/partials/home.html',
			controller:'home'
		}).
		when('/contacts/new', {
			templateUrl:'app/partials/addContact.html',
			controller:'addContact'
		}).
		otherwise({
                redirectTo:'/contacts'
        });	
}]);

})();