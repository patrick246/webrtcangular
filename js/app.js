/**
 * Created by Patrick on 01.10.2015.
 */
angular.module('webrtc', ['ngMaterial', 'ngRoute'])
	.config(function ($mdThemingProvider)
	{

	})
	.config(function ($routeProvider)
	{
		$routeProvider.when('/login',{
			templateUrl: 'templates/login.html',
			controller: 'LoginCtrl'
		});
	})
    .controller('AppCtrl', function ($scope, $mdSidenav)
    {
        $scope.toggleSidenav = function (menuId)
        {
            $mdSidenav(menuId).toggle();
        }
    })
	.controller('UserInfoCtrl', function ($scope, UserManager)
	{
		$scope.userdata = UserManager.userdata;
		$scope.usermanager = UserManager;
	})
	.controller('SidenavCtrl', function ($scope, $location, UserManager)
	{
		$scope.go = function (where)
		{
			$location.path(where);
		};
		if (!UserManager.is_logged_in)
		{
			$scope.menu_entries = [
				{
					icon: 'lock',
					text: 'Login',
					path: '/login'
				}
			];
		} else
		{
			$scope.menu_entries = [
				{
					icon: 'call',
					text: 'Call History',
					path: '/callhistory'
				},
				{
					icon: 'chat_bubble',
					text: 'Chats',
					path: '/chat'
				},
				{
					icon: 'contact',
					text: 'Contacts',
					path: '/contacts'
				},
			];
		}
	})
	.controller('LoginCtrl', function ()
	{
		this.username = "";
		this.password = "";
	})
	.factory('UserManager', function ()
	{
		var user_token = null;
		var is_logged_in = false;
		var users = [
			{firstname: 'Patrick', lastname: "Hahn", username: "patrick246"},
			{firstname: 'Leandro', lastname: "Späth", username: "leodj"}
		];
		return {
			userdata: {
				avatar: 'img/users/no_profile.png'
			},
			is_logged_in: false,
			login_as: function (username, password)
			{
				var u = users.find(function (elem)
				{
					return elem.username === username;
				});
				if(u === undefined)
					return false;
				this.userdata = u;
			}
		};
	})