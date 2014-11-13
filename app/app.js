angular.module('myApp', ['ngSanitize', 'myApp.filters']);

angular.module('myApp.filters', []);

angular.module('myApp.filters').filter('localify', function(){
	return function(input, extraNationalist){

		var output = input.replace('Bangalore', 'Bengaluru');

		if ( extraNationalist){
			output = output.replace('India', 'Bharat!');
		}

		return output;
	}
})

