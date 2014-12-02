'use strict';

describe('Controller: MeCtrl', function() {

    // load the controller's module
    beforeEach(module('progressClientApp'));

    var MeCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        MeCtrl = $controller('MeCtrl', {
            $scope: scope
        });
    }));

    // it('should attach a list of awesomeThings to the scope', function() {
    //     expect(scope.awesomeThings.length).toBe(3);
    // });
});
