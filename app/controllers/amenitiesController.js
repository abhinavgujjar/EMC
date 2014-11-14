angular.module('myApp').controller('amenitiesController', function($scope) {
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

});