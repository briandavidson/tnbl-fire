'use strict';

/**
 * @ngdoc function
 * @name tnblFireApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tnblFireApp
 */
angular.module('tnblFireApp')
	.controller('MainCtrl', function($scope, $timeout, $interval, $location, $http) {

		$scope.configs = [];
		$scope.custom_request_success = false;

		// https://tnbl-fire.firebaseio.com/.json
		$scope.endpoint = '';
		$scope.last_endpoint = '';
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

		$scope.float = true;
		$interval(function() {
			$scope.float = !$scope.float;
		}, 1500);

		$scope.go = function(dest) {
			if ($scope.endpoint.length && dest !== 'nowhere') {
				$scope.custom_request_success = true;
				$http({
					method: 'GET',
					url: $scope.endpoint
				}).then(function successCallback(response) {
					// this callback will be called asynchronously
					$scope.custom_request_success = true;
					$scope.endpoint = '';
					// when the response is available
					for (var config in response.data.configs) {
						var tmp = response.data.configs[config];
						$scope.configs.push(tmp);
					}
				}, function errorCallback(response) {
					$scope.last_endpoint = $scope.endpoint;
				});
			} else if (dest === 'configs') {
				$scope.configs = [];
				$location.path('/configs');
			} else if (dest === 'nowhere') {
				$scope.configs = [];
				$scope.custom_request_success = false;
				$scope.endpoint = '';
				$location.path('/configs');
			}
		}

		$scope.ascii = false;
		$scope.hire_me = function() {
			$scope.ascii = true;
		};

		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
	});
