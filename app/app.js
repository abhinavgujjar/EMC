angular.module('myApp', ['ngSanitize', 'myApp.filters',
	'myApp.service', 'ngRoute', 'abGreeting', 'ngResource'
]);

angular.module('myApp').config(function($routeProvider, greetingProvider) {
	$routeProvider.when('/home', {
		templateUrl: 'partials/home.html',
		controller: 'homeController'
	});

	$routeProvider.when('/listing', {
		templateUrl: 'partials/listing.html',
		controller: 'listingController'
	});

	$routeProvider.when('/new', {
		templateUrl: 'partials/new.html',
		controller: 'addController'
	});


	$routeProvider.when('/details/:hotelId', {
		templateUrl: 'partials/details.html',
		controller: 'detailsController'
	});

	$routeProvider.otherwise({
		redirectTo: '/home'
	});

	greetingProvider.setCompanyName('Microsoft');
})

angular.module('myApp.filters', []);

angular.module('myApp.filters').filter('localify', function() {
	return function(input, extraNationalist) {

		var output = input.replace('Bangalore', 'Bengaluru');

		if (extraNationalist) {
			output = output.replace('India', 'Bharat!');
		}

		return output;
	}
});

//declariton
angular.module('myApp.service', []).value('descLength', 100);
