angular.module('myApp').controller('addController', function($scope, hotelsData) {
	$scope.addHotel = function() {

		hotelsData.addHotel($scope.newHotel);
	}

});
