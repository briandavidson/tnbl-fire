'use strict';

/**
 * @ngdoc function
 * @name tnblFireApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tnblFireApp
 */
angular.module('tnblFireApp')
	.controller('MainCtrl', function($scope, $timeout, $interval) {

		$scope.loaded = false;
		$scope.reveal = false;
		$timeout(function() {
			$scope.loaded = true;
			$scope.reveal = true;
			var custom_endpoint = angular.element('#send_request_input');
			custom_endpoint.focus();
			$interval(function() {
				$scope.loaded = !$scope.loaded;
			}, 60000);
		}, 100);

		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
	});
