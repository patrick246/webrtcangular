angular.module('de.patrick246.webrtc.modules.chats', ['de.patrick246.webrtc.modules.chats.controllers', 'de.patrick246.webrtc.modules.chats.services'])
	.config(function ($routeProvider)
	{
		$routeProvider.when('/chats/:id', {
			templateUrl: 'js/chat-module/views/chat-view.html',
			controller: 'ChatViewCtrl'
		}).when('/chats', {
			templateUrl: 'js/chat-module/views/chat-list.html',
			controller: 'ChatListCtrl'
		});
	});