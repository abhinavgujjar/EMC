//usage
angular.module('myApp.service').factory('hotelsData', function($http) {
	return {
		getHotels: function() {
			var config = {
				method : 'GET',
				url : 'data/hotels.json'
			}

			var hotels;
			$http(config).success(function(result){
				hotels = result;
			});

			return hotels;
		},
		addHotel: function(hotel) {

			var newHotel = angular.copy(hotel);
			if (!newHotel.pic) {
				newHotel.pic = "unknown.jpg";
			}
			hotels.push(newHotel);
		},
		getHotel : function(hotelId){
			var target;

			angular.forEach(hotels, function(item, index){
				if (item.id === hotelId){
					target = item;
				}
			});

			return target;
		}
	}

});
