angular.module('app').controller('accountCtrl', function($scope) {
	$scope.user = {
		username: '',
		email: '',
		phone: '',
		newPassword: '',
		confirmPPassword: ''
	};

	$scope.submit = function() {

	};
});