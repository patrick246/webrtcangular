/**
 * Created by Patrick on 01.10.2015.
 */
angular.module('de.patrick246.webrtc', ['ngMaterial', 'ngRoute', 'ngMessages', 'de.patrick246.webrtc.modules.login', 'de.patrick246.webrtc.modules.sidenav'])
	.config(function ($routeProvider)
	{
		$routeProvider
			.when('/', {
				template: 'Hello World',
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



