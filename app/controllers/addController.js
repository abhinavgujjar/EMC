angular.module('myApp').controller('addController', function($scope, hotelsData, $location) {
	var defaultHotel = {
		price : 5000,
		amenities : [{
			name : 'Gym'
		},{
			name : 'Wifi'
		}
		]
	};

	$scope.itemBeingEdited;

	$scope.edit = function(item){
		$scope.itemBeingEdited = item;
	}

	$scope.save= function(){
		$scope.itemBeingEdited= null;	
	}

	$scope.addAmenity = function(newAmenity){
		$scope.newHotel.amenities.push({
			name : newAmenity
		})
	}

	$scope.newHotel = angular.copy(defaultHotel);

	$scope.reset = function(){
		$scope.newHotel = angular.copy(defaultHotel);
	}

	$scope.addHotel = function() {

		hotelsData.addHotel($scope.newHotel);

		$location.url('/listing');

	}

});
