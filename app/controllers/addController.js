angular.module('myApp').controller('addController', 

	function($scope, hotelsData, $location) {
	var defaultHotel = {
		price: 5000,
		amenities: [{
			name: 'Gym'
		}, {
			name: 'Wifi'
		}]
	};

	$scope.fontLarge = false;

	$scope.$on('fontSizeChanged', function(event, args){
		if (args == 'large'){
			$scope.fontLarge = true;
		}
	});

	$scope.newHotel = angular.copy(defaultHotel);

	$scope.availableStates = ['Tamil Nadu', 'Karnataka', 'Kerala'];

	$scope.availableCities = [];

	$scope.$watch('selectedState', function(newValue, oldValue){
		$scope.availableCities = citiesMap[newValue];
	})

	var citiesMap = {
		'Tamil Nadu' : ['Chennai', 'Coimbatore'],
		'Karnataka' : ['Bangalore', 'Hubli', 'Mysore'],
		'Kerala' : ['Kochi', 'Trissur', 'Wyanad']
	}

	$scope.images = ['goldenpalms.jpg', 'clarks-exotica-resort.jpg', 'ramada.jpg', 'ibis.jpg', 'oberoi.jpg'];

	$scope.currentIndex = 0;

	$scope.selectedImage = $scope.images[0];

	$scope.reset = function() {
		$scope.newHotel = angular.copy(defaultHotel);
	}

	$scope.addHotel = function() {

		$scope.newHotel.pic = $scope.images[$scope.currentIndex];

		hotelsData.addHotel($scope.newHotel);

		$location.url('/listing');

	}

});