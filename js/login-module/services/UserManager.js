angular.module('de.patrick246.webrtc.modules.login.services')
	.factory('UserManager', function ($rootScope)
	{
		var users = [
			{firstname: 'Patrick', lastname: "Hahn", username: "patrick246", avatar: 'img/users/patrick246.jpg'},
			{firstname: 'Leandro', lastname: "Späth", username: "leodj", avatar: 'img/users/leodj.jpg'}
		];

		var user_manager = {
			userdata: {
				avatar: 'img/users/no_profile.png'
			},
			is_logged_in: false,
			login_token: '',

			login_as: function (username, password)
			{
				console.log(users);
				var u = users.filter(function (elem)
				{
					return elem.username === username;
				});
				if(u === undefined || u === [])
					return false;
				this.userdata = u[0];
				this.is_logged_in = true;
				return true;
			}
		};

		if(localStorage.Usermanager !== undefined)
		{
			var restored = angular.fromJson(localStorage.Usermanager);
			user_manager.is_logged_in = restored.is_logged_in;
			user_manager.userdata = restored.userdata;
			user_manager.login_token = restored.login_token;
		}

		$rootScope.$on('savestate', function ()
		{
			localStorage.Usermanager = angular.toJson({
				is_logged_in: user_manager.is_logged_in,
				userdata: user_manager.userdata,
				login_token: user_manager.login_token
			});
		});

		return user_manager;
	});