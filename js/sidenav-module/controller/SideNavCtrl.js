angular.module('de.patrick246.webrtc.modules.sidenav.controller')
	.controller('SidenavCtrl', function ($scope, $location, $mdDialog, UserManager, SideNavMenuProvider)
	{
		$scope.go = function (where)
		{
			$location.path(where);
		};
		$scope.active_set = function ()
		{
			return SideNavMenuProvider.active_set;
		}

	});
