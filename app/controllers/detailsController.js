function detailsController($scope, hotelsData, $routeParams) {
	$scope.hotel = hotelsData.selectedHotel;

	if (!$scope.hotel) {

		var hotelId = $routeParams.hotelId;

		console.log(hotelId);

		$scope.hotel = hotelsData.getHotel(hotelId);
	}
}

angular.module('myApp').controller('detailsController', ['$scope', 'hotelsData', '$routeParams', detailsController]);