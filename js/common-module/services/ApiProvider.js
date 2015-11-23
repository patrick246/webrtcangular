angular.module('de.patrick246.webrtc.modules.common.services')
	.service('ApiProvider', function ($http)
	{
		var token = "";
		var check_for_token = function ()
		{
			console.log(token);
			return token == undefined || token == "";
		};
		var token_error = {
			status: "error",
			level: "error",
			code: 2,
			message: "Invalid Token"
		};
		var api = {
			login: function (username, password)
			{
				var promise = new Promise(function (resolve, reject)
				{
					$http.post('/api/auth/login', {}, {
						headers: {
							username: username,
							password: password
						}
					}).then(function (response)
					{
						if(response.status == "error")
						{
							console.error(response);
							reject(response);
							return;
						}
						if(response.token !== undefined && response.token !== "")
							token = response.token;
						resolve(response);
					}, function (response)
					{
						console.error(response);
						reject(response);
					});
				});

				return promise;
			},
			logout: function ()
			{
				return new Promise(function (resolve, reject)
				{
					if(check_for_token())
						return reject(token_error);

					$http.post('/api/auth/logout', {}, {
						headers: {
							token: token
						}
					}).then(function (response)
					{
						if(response.status == "error")
							return reject(response);
					}, function (response)
					{
						reject(response);
					});
				});
			},
			contacts: {
				list: function ()
				{
					
				},
				getById: function ()
				{
					
				},
				add: function ()
				{
					
				},
				remove: function ()
				{
					
				},
				requests: function ()
				{
					
				}
			},
			messages: {
				since: function ()
				{
					
				},
				archive: function ()
				{
					
				},
				send: function ()
				{
					
				}
			}
		}
		return api;
	});