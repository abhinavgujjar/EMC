angular.module('myApp').controller('amenitiesController', function($scope) {
	$scope.itemBeingEdited;

	$scope.edit = function(item){
		$scope.itemBeingEdited = item;
	}

	$scope.save= function(){
		$scope.itemBeingEdited= null;	
	}

	$scope.addAmenity = function(){
		$scope.newHotel.amenities.push({
			name : $scope.newAmenity
		});

		$scope.newAmenity = '';

		$scope.$emit('action', 'amenity added');
	}

});