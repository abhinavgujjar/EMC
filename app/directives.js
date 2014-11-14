angular.module('myApp').directive('preview', function() {
	return {
		restrict: 'E',
		templateUrl: 'partials/preview.html',
		scope: {
			text: '=',
			rows: '@'
		}
	}
})

angular.module('myApp').directive('routeTicker', function() {
	return {
		restrict: 'E',
		template: '<h3>{{ticks}}</h3>',
		scope: {

		},
		controller: function($scope, $interval) {
			$scope.ticks = 0;

			$interval(function() {
				$scope.ticks++
			}, 300);

			$scope.$on('$routeChangeSuccess', function() {
				$scope.ticks = 0;
			})
		}
	}
})

angular.module('myApp').directive('panel', function() {
	return {
		restrict: 'E',
		transclude : true,
		templateUrl: 'partials/panel.html',
		scope: {
			heading : '@'
		}
	}
})