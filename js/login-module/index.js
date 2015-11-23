angular.module('de.patrick246.webrtc.modules.login', ['ngMaterial', 'de.patrick246.webrtc.modules.login.services', 'de.patrick246.webrtc.modules.sidenav'])
	.config(function ($routeProvider)
	{
		$routeProvider.when('/login', {
				template: '&nbsp;',
				controller: function(){},
				resolve:
				{
					data1: function ($mdDialog, $location, AuthManager, SideNavMenuProvider)
					{
						if(!AuthManager.is_logged_in)
						{
							return $mdDialog.show({
								controller: LoginDialogCtrl,
								templateUrl: 'js/login-module/views/login.dialog.html',
								parent: angular.element(document.body),
								targetEvent: null,
								clickOutsideToClose: false
							}).then(function (answer) {
								AuthManager.login_as(answer.username, answer.password).then(function(response)
								{
									SideNavMenuProvider.change_set('user');
									$location.path('/');
								},
								function(reponse)
								{
									console.error(response);
									$location.path('/login/failed');
								});

							});
						}
						else
						{
							$location.path('/');
						}
					}
				}
			})
			.when('/login/failed', {
				template: 'Login failed'
			})
			.when('/logout', {
				template: '&nbsp;',
				controller: function () {},
				resolve:
				{
					data1: function ($mdToast, AuthManager, SideNavMenuProvider, $location)
					{
						AuthManager.logout().then(function (response)
						{
							SideNavMenuProvider.change_set('visitor');
							return $mdToast.show($mdToast.simple().content('Logging you out')).then(function ()
							{
								$location.path('/');
							});
						}, function (response)
						{
							console.error(response);
						});

					}
				}
			});
	});