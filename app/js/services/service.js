(function(){
	var app = angular.module("contactMod",[]);
	app.service('contactService', ['$http', function($http){
		var contact={};
		this.setContact=function(con)
			{
				contact=con;
			};
		this.getContact=function(){
				return contact;
			};
	}]);

})();