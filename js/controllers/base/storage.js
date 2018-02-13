materialAdmin
	.controller('storageCtrl', function ($scope, $http) {
		$http.get('data/mock/storage.json').then(function (res) {
			$scope.storageList = res.data.data
		})
	})