angular.module('de.patrick246.webrtc.modules.login.services')
	.factory('AuthManager', function ($rootScope)
	{
		var users = [
			{firstname: 'Patrick', lastname: "Hahn", username: "patrick246", avatar: 'img/users/patrick246.jpg'},
			{firstname: 'Leandro', lastname: "Späth", username: "leodj", avatar: 'img/users/leodj.jpg'}
		];

		var default_userdata = {
			avatar: 'img/users/no_profile.png'
		};

		var auth_manager = {
			userdata: default_userdata,
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
			},
			logout: function ()
			{
				this.login_token = '';
				this.userdata = default_userdata;
				this.is_logged_in = false;
				this.save_state();
			},
			save_state: function ()
			{
				localStorage.Authmanager = angular.toJson({
					is_logged_in: this.is_logged_in,
					userdata: this.userdata,
					login_token: this.login_token
				});
			},
			restore_state: function (restored)
			{
				this.is_logged_in = restored.is_logged_in;
				this.userdata = restored.userdata;
				this.login_token = restored.login_token;
			}
		};

		if(localStorage.Authmanager !== undefined)
		{
			auth_manager.restore_state(angular.fromJson(localStorage.Authmanager));
		}

		$rootScope.$on('savestate', function ()
		{
			auth_manager.save_state();
		});

		return auth_manager;
	});