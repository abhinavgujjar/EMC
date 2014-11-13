function listingController($scope, $rootScope, descLength, hotelsData, 
	votingService) {

	$scope.showMore = function(hotel) {
		hotel.showMore = true;
	}

	$scope.maxLength = descLength;

	$scope.maxItems = 5;
	$scope.orderTerm = 'name';

	$scope.upVote = function(hotel){
		votingService.upVote(hotel)
	};

	$scope.downVote = function(hotel){
		votingService.downVote(hotel);	
	} 


	$scope.companyName = "EMC";

	$scope.classEven = 'even';


	$scope.hotels = hotelsData.getHotels();
}


angular.module('myApp').controller('listingController', ['$scope', 
	'$rootScope', 'descLength', 'hotelsData', 'votingService', listingController]);