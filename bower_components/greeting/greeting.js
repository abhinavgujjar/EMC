var gm = angular.module('abGreeting', []);

gm.provider('greeting', function() {

	var companyName;

	this.setCompanyName = function(_companyName) {
		companyName = _companyName;
	}

	this.$get = function() {
		function getGreeting() {
			var time = new Date();
			var hour = time.getHours();
			if (hour > 12) {
				return 'Afternoon - ' + companyName;
			} else {
				return 'Morning - ' + companyName;
			}
		}

		var greeting = 'Good ' + getGreeting();
		return greeting;
	}


})