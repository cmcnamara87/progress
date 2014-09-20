'use strict';

describe('Controller: SinglepostCtrl', function () {

  // load the controller's module
  beforeEach(module('progressClientApp'));

  var SinglepostCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SinglepostCtrl = $controller('SinglepostCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
