materialAdmin
	.controller('goodCtrl', function ($scope, $http) {
		$http.get('data/mock/good.json').then(function (res) {
			$scope.goodList = res.data.data
		})
	})