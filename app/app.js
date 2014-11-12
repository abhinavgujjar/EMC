
angular.module('myApp', ['ngSanitize']);

	function anyName ($scope, $rootScope){
			var isGood = false;
			var prefix = 'Bad';
			if ( isGood){
				prefix = 'Good';
			}

			var greeting = prefix + 'Late Morning';

			$scope.greeting = greeting;


			$scope.companyName = "EMC";
		}


	angular.module('myApp').controller('mainController', anyName);
	angular.module('myApp').controller('otherController', function($scope){
		$scope.greeting = "Great Morning <h1>SUPER</h1>";
	});
	
	angular.module('myApp').controller('nestedController', function($scope){
		//$scope.greeting = 'Great Morning!!!';
	});
