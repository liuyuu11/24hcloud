materialAdmin
	.controller('saleoutCtrl', function ($scope, $http) {
		$http.get('data/mock/saleout.json').then(function (res) {
			$scope.saleoutList = res.data.data
		})
	})