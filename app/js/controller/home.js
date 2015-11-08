(function(){
	var  app = angular.module("home",[]);
	app.controller('home', ['$scope', '$http', 'contactService', function($scope, $http, contactService){
		$scope.contacts=[];
		$scope.cp;
		$http.get('resources/contacts.json').success(function(data, status){
			$scope.contacts=data.contacts;
		}).error(function(data, status){
			console.log(data);
			console.log(status);
		});	
		$scope.editContact = function(contact)
		{
			contactService.setContact(contact);
		};	
		$scope.deleteContact = function(index)
		{
			$scope.contacts.splice(index,1);
		};
		$scope.sayHello=function()
		{
			$scope.cp='Hi Hello';
		}

	}]);

	app.controller('addContact', ['$scope', '$http', 'contactService', '$location',function($scope, $http, contactService, $location){
			$scope.contact={};
			$scope.contact=contactService.getContact();
			$scope.addNew=function()
			{
				$http.post('resources/contacts.json', $scope.contact).success(function(data, status){
					$location.path('#/contacts')
				}).error(function(data, status){
					console.log(data);
					console.log(status);
				});	
			};
	}]);

})();