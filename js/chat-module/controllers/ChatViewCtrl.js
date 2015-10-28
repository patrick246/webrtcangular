angular.module('de.patrick246.webrtc.modules.chats.controllers')
	.controller('ChatViewCtrl', function ($scope, $routeParams, ChatMessagesProvider)
	{
		$scope.params = $routeParams;
		$scope.get_userinfos = function (id)
		{
			return ChatMessagesProvider.get_messages_from_id(id);
		}

	})
	.config(function ($mdThemingProvider)
	{
		$mdThemingProvider.theme('default')
			.accentPalette('deep-purple', {
				'hue-1': '50'
		});

	});