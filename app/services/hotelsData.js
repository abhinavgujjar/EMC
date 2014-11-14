//usage
angular.module('myApp.service').factory('hotelsData', function($http, $q) {
	return {
		getHotels: function() {
			var deferred = $q.defer();

			var resp = $http.get('https://api.parse.com/1/classes/inn',{
				headers: {
					'X-Parse-Application-Id': 'KWQ0rGbTccdhYd4a0Cawy21wpi94GBdh9VjnQsyZ',
					'X-Parse-REST-API-Key': 'M0j6NQBiPVgdOnuv5811fbgTojTAVqo6XjF1E3Pd',
				}
			});

			resp.success(function(result) {
				deferred.resolve(result.results);
			});

			return deferred.promise;
		},
		addHotel: function(hotel) {

			$http.post('https://api.parse.com/1/classes/inn', hotel, {
				headers: {
					'X-Parse-Application-Id': 'KWQ0rGbTccdhYd4a0Cawy21wpi94GBdh9VjnQsyZ',
					'X-Parse-REST-API-Key': 'M0j6NQBiPVgdOnuv5811fbgTojTAVqo6XjF1E3Pd',
				}
			});

		},
		getHotel: function(hotelId) {
			var target;

			angular.forEach(hotels, function(item, index) {
				if (item.id === hotelId) {
					target = item;
				}
			});

			return target;
		}
	}

});