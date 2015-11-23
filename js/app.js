/**
 * Created by Patrick on 01.10.2015.
 */
angular.module('de.patrick246.webrtc', ['ngMaterial', 'ngRoute', 'ngMessages', 'de.patrick246.webrtc.modules.login', 'de.patrick246.webrtc.modules.sidenav', 'de.patrick246.webrtc.modules.chats', 'ngResource'])
	.config(function ($routeProvider)
	{
		$routeProvider
			.when('/', {
				template: 'Default page',
				controller: 'AppCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});


	})
    .controller('AppCtrl', function ($scope, $mdSidenav)
    {
        $scope.toggleSidenav = function (menuId)
        {
            $mdSidenav(menuId).toggle();
        }
    })
	.run(function ($rootScope)
	{
		window.onbeforeunload = function (e)
		{
			$rootScope.$broadcast('savestate');
		}
	});



