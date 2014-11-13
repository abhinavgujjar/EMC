angular.module('myApp').controller('greetingController', function($scope) {

	var isGood = false;
	var prefix = 'Bad';
	if (isGood) {
		prefix = 'Good';
	}

	var greeting = prefix + 'Late Morning';

	$scope.greeting = greeting;

	$scope.companyName = "EMC";
});
