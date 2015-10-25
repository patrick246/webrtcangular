angular.module('de.patrick246.webrtc.modules.sidenav.services')
	.factory('SideNavMenuProvider', function ($location, $mdDialog, UserManager) {
		var menu_sets = {
			visitor: [
				{
					icon: 'lock',
					text: 'Login',
					onclick: function (ev) {
						$location.path('/login');
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
			active_set: UserManager.is_logged_in ? menu_sets.user : menu_sets.visitor,
			change_set: function (new_set)
			{
				this.active_set = menu_sets[new_set];
			}
		};
	});