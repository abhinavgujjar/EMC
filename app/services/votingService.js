
angular.module('myApp.service').factory('votingService', function() {

	return {
		upVote: function(hotel) {
			hotel.rating++;
		},
		downVote: function(hotel) {
			if (hotel.rating > 0) {

				hotel.rating--;
			}
		}
	}

});