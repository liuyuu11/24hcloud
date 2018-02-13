materialAdmin
	.controller('shopCtrl', function ($scope, $http) {
		$http.get('data/mock/shop.json').then(function (res) {
			$scope.shopList = res.data.data
		})
	})