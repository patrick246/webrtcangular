/**
 * Created by Patrick on 01.10.2015.
 */
angular.module('webrtc', ['ngMaterial', 'ngRoute', 'ngMessages'])
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
        //UserManager.login_as('patrick246', '');
		$scope.userdata = UserManager.userdata;
		$scope.usermanager = UserManager;
	})
	.controller('SidenavCtrl', function ($scope, $location, $mdDialog, UserManager, SideNavMenuProvider)
	{
		$scope.go = function (where)
		{
			$location.path(where);
		};
        $scope.menu_entries = SideNavMenuProvider.active_set;
	})
	.controller('LoginCtrl', function ($scope)
	{
		$scope.username = "";
		$scope.password = "";
        $scope.onSubmit = function (ev) {

        };
	})
	.factory('UserManager', function ()
	{
		var user_token = null;
		var is_logged_in = false;
		var users = [
			{firstname: 'Patrick', lastname: "Hahn", username: "patrick246", avatar: 'img/users/patrick246.jpg'},
			{firstname: 'Leandro', lastname: "Späth", username: "leodj", avatar: 'img/users/leodj.jpg'}
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
                this.is_logged_in = true;
			}
		};
	})
    .factory('SideNavMenuProvider', function ($location, $mdDialog, UserManager) {
        var menu_sets = {
            visitor: [
                {
                    icon: 'lock',
                    text: 'Login',
                    onclick: function (ev) {
                        $mdDialog.show({
                            controller: LoginDialogCtrl,
                            templateUrl: 'templates/login.dialog.html',
                            parent: angular.element(document.body),
                            targetEvent: ev,
                            clickOutsideToClose: false
                        }).then(function (answer) {
                            UserManager.login_as(answer.username, answer.password);
                        }).then(function () {

                        });
                    }
                }
            ],
                user: [
                {
                    icon: 'call',
                    text: 'Call History',
                    onclick: function()
                    {
                        $location.path('/callhistory');
                    }
                },
                {
                    icon: 'chat_bubble',
                    text: 'Chats',
                    onclick: function()
                    {
                        $location.path('/chat');
                    }
                },
                {
                    icon: 'contacts',
                    text: 'Contacts',
                    onclick: function()
                    {
                        $location.path('/contacts');
                    }
                },
            ]
        };
        return {
            active_set: menu_sets.visitor
        };
    })

function LoginDialogCtrl($scope, $mdDialog)
{
    $scope.username = "";
    $scope.password = "";
    $scope.onSubmit = function (ev) {
        $mdDialog.hide({username: $scope.username, password: $scope.password});
    };
}