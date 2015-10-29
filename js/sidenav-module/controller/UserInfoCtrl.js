angular.module('de.patrick246.webrtc.modules.sidenav.controller')
	.controller('UserInfoCtrl', function ($scope, AuthManager)
	{
		$scope.userdata = AuthManager.userdata;
		$scope.authmanager = AuthManager;
	});