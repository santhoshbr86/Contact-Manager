describe('home controller', function() {
describe('home ', function(){
  var scope, ctrl, $httpBackend;
  beforeEach(module('home'));
  beforeEach(module('contactMod'));
  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('resources/contacts.json').
        respond([{
            		id: 1,
             		name : "Terrence S. Hatfield",
              		tel: "651-603-1723",
              		email: "TerrenceSHatfield@rhyta.com"
            	}]);

    scope = $rootScope.$new();
    ctrl = $controller('home', {$scope: scope});
  }));  	
  it('should create "Contacts" model with 1 contact fetched ', function() {
  expect(scope.contacts).toBeUndefined();
  $httpBackend.flush();
  expect(scope.contacts).toEqual([{
            		id: 1,
             		name: "Terrence S. Hatfield",
              		tel: "651-603-1723",
              		email: "TerrenceSHatfield@rhyta.com"
            	}]);
	});
});
});