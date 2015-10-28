angular.module('de.patrick246.webrtc.modules.sidenav.controller')
	.controller('UserMenuCtrl', function ($scope, $location)
	{
		var menu_content = [
			{
				text: 'Options',
				href: '/options'
			},
			{
				text: 'Log out',
				href: '/logout'
			}
		];
		$scope.menu_content = function ()
		{
			return menu_content;
		};

		$scope.go = function (to)
		{
			$location.path(to);
		}
	});