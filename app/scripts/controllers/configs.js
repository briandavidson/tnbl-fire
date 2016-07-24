'use strict';
/**
 * @ngdoc function
 * @name tnblFireApp.controller:ChatCtrl
 * @description
 * # ChatCtrl
 * A demo of using AngularFire to manage a synchronized list.
 */
angular.module('tnblFireApp')
	.controller('ConfigsCtrl', function($scope, Ref, $firebaseArray, $timeout) {

		$scope.loaded = false;
		$scope.reveal = false;
		$scope.creating_config = false;
		$timeout(function() {
			$scope.loaded = true;
			$scope.reveal = true;
		}, 300);

		$scope.new_config = {
			name: "",
			hostname: "",
			port: undefined,
			username: ""
		};
		// synchronize a read-only, synchronized array of messages, limit to most recent 10
		$scope.configs = $firebaseArray(Ref.child('configs').limitToLast(10));

		// display any errors
		$scope.configs.$loaded().catch(alert);

		// provide a method for adding a message
		$scope.addConfig = function() {
			// push a message to the end of the array
			$scope.configs.$add($scope.new_config)
				.then(function(data) {
					console.dir(data);
					$scope.new_config = {
						name: "",
						hostname: "",
						port: undefined,
						username: ""
					};
					$scope.creating_config = false;
				})
				// display any errors
				.catch(alert);
		};

		function alert(msg) {
			$scope.err = msg;
			$timeout(function() {
				$scope.err = null;
			}, 5000);
		}
	});
