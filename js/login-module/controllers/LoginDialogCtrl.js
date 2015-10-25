function LoginDialogCtrl($scope, $mdDialog)
{
	$scope.username = "";
	$scope.password = "";
	$scope.onSubmit = function (ev) {
		$mdDialog.hide({username: $scope.username, password: $scope.password});
	};
}