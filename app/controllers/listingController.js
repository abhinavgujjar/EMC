function listingController(y, $rootScope, descLength, hotelsData) {

	y.showMore = function(hotel) {
		hotel.showMore = true;
	}

	y.maxLength = descLength;

	y.maxItems = 5;
	y.orderTerm = 'name';

	y.upVote = function(hotel) {
		hotel.rating++;
	}

	y.downVote = function(hotel) {
		hotel.rating--;
	}


	y.companyName = "EMC";

	y.classEven = 'even';


	y.hotels = hotelsData.getHotels();
}


angular.module('myApp').controller('listingController', ['$scope', 
	'$rootScope', 'descLength', 'hotelsData', listingController]);