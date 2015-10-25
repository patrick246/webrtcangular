angular.module('de.patrick246.webrtc.modules.contacts', ['de.patrick246.webrtc.modules.contacts.controllers', 'de.patrick246.webrtc.modules.contacts.services'])
	.config(function ($routeProvider)
	{
		$routeProvider.when('/contacts', {
			templateUrl: 'js/contact-module/views/contact-list.html'
		});
	});