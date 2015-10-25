angular.module('de.patrick246.webrtc.modules.chats.controllers')
	.controller('ChatListCtrl', function ($scope)
	{
		$scope.contacts = [
			{
				id: 2,
				firstname: "Endrit",
				lastname: "Callaki",
				avatar: "img/users/endi.jpg",
				last_message: "Wecker hat nicht geklingelt und niemand daheim, komme demnächst",
				is_group: false
			},
			{
				id: 3,
				firstname: "Leandro",
				lastname: "Späth",
				avatar: "img/users/leodj.jpg",
				last_message: "lol, musste nur die allerletzte Seite nochmal ausfüllen",
				is_group: false
			},
			{
				id: 4,
				firstname: "Endrit",
				lastname: "Callaki",
				group_name: "Geschlossene Nervenheilanstalt",
				avatar: "img/users/nervenheilanstalt.jpg",
				last_message: "😆 Sieht gut aus",
				is_group: true
			},
		];
		$scope.open_chat = function (id)
		{
			alert("Here comes the chat with ID: " + id);
		}
	});