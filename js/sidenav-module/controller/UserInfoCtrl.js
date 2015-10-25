angular.module('de.patrick246.webrtc.modules.sidenav.controller')
	.controller('UserInfoCtrl', function ($scope, UserManager)
	{
		//UserManager.login_as('patrick246', '');
		$scope.userdata = UserManager.userdata;
		$scope.usermanager = UserManager;
	});