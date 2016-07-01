angular.module('app').controller('settingsCtrl', function($scope) {
	$scope.user = {
		username: '',
		email: '',
		phone: '',
		newPassword: '',
		confirmPPassword: ''
	};
});