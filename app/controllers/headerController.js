angular.module('myApp').controller('headerController', function($scope, $location){


	$scope.isActive = function(viewLocation){
		return viewLocation == $location.url();
	}


	$scope.header = 'Started';

	$scope.changeFont = function(){
		$scope.$broadcast('fontSizeChanged', $scope.font);
	}

	$scope.$on('action', function(event, args){
		$scope.header = args;
	});


})