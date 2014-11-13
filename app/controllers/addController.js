angular.module('myApp').controller('addController', function($scope) {
	$scope.addHotel = function() {

		var obj = angular.copy($scope.newHotel);
		$scope.hotels.push(obj);
	}

});
