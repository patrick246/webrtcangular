angular.module('de.patrick246.webrtc.modules.chats.services')
	.factory('ChatMesagesProvider', function ()
	{
		return {
			get_chat_messages_from_id: function (id)
			{
				return {
					1: {
						fistname: 'Patrick',
						lastname: 'Hahn'
					},
					2: {
						firstname: 'Endrit',
						lastname: 'Callaki'
					}
				}[id];
			}
		}
	});