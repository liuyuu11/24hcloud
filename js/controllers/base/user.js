materialAdmin
	.controller('userCtrl', function ($scope, $http) {
		$http.get('data/mock/user.json').then(function (res) {
			$scope.userList = res.data.data
		})
	})