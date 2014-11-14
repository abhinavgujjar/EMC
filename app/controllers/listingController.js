function listingController($scope, $rootScope, descLength, hotelsData,
	votingService, $location, $http) {

	$scope.showMore = function(hotel) {
		hotel.showMore = true;
	}

	$scope.maxLength = descLength;

	$scope.maxItems = 5;
	$scope.orderTerm = 'name';

	$scope.upVote = function(hotel) {
		votingService.upVote(hotel)
	};

	$scope.downVote = function(hotel) {
		votingService.downVote(hotel);
	}

	$scope.selectHotel = function(hotel) {
		hotelsData.selectedHotel = hotel;

		$location.url('/details/' + hotel.objectId);
	}

	$scope.classEven = 'even';


	hotelsData.getHotels().then(function(hotels){
		$scope.hotels = hotels;
	});

}


angular.module('myApp').controller('listingController', ['$scope',
	'$rootScope', 'descLength', 'hotelsData', 'votingService', '$location', '$http', listingController
]);