angular.module('de.patrick246.webrtc.modules.chats.controllers')
	.controller('ChatListCtrl', function ($scope, $location)
	{
		$scope.contacts = [
			{
				id: 2,
				firstname: "Endrit",
				lastname: "Callaki",
				username: "EndiBubendi",
				avatar: "img/users/endi.jpg",
				last_message: "Wecker hat nicht geklingelt und niemand daheim, komme demnächst",
				is_group: false
			},
			{
				id: 3,
				firstname: "Leandro",
				lastname: "Späth",
				username: "leodj",
				avatar: "img/users/leodj.jpg",
				last_message: "lol, musste nur die allerletzte Seite nochmal ausfüllen",
				is_group: false
			},
			{
				id: 4,
				firstname: "Endrit",
				lastname: "Callaki",
				username: "group_geschlossene_nervenheilanstalt",
				group_name: "Geschlossene Nervenheilanstalt",
				avatar: "img/users/nervenheilanstalt.jpg",
				last_message: "😆 Sieht gut aus",
				is_group: true
			},
		];

		$scope.open_chat = function (id)
		{
			$location.path('/chats/'+id);
		};

		$scope.list_search = function (value)
		{
			console.log(value, $scope.search);
			if(!value.is_group)
			{
				return (value.firstname + " " + value.lastname + " " + value.username).toLowerCase().indexOf($scope.search.toLowerCase()) !== -1;
			}
			return (value.group_name).toLowerCase().indexOf($scope.search.toLowerCase()) !== -1;
		};

		$scope.search = "";
	});