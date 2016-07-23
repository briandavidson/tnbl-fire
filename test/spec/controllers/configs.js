'use strict';

describe('Controller: ConfigsCtrl', function () {

  // load the controller's module
  beforeEach(module('tnblFireApp'));

  var ConfigsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConfigsCtrl = $controller('ConfigsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
