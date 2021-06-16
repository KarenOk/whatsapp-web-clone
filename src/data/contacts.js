import ppGirl1 from "assets/images/profile-picture-girl-1.jpeg";
import ppGirl2 from "assets/images/profile-picture-girl-2.jpeg";
import ppGirl3 from "assets/images/profile-picture-girl-3.jpeg";
import ppGirl4 from "assets/images/profile-picture-girl-4.jpeg";
import ppBoy1 from "assets/images/profile-picture-boy-1.jpeg";
import ppBoy2 from "assets/images/profile-picture-boy-2.jpeg";
import ppBoy3 from "assets/images/profile-picture-boy-3.jpeg";
import getRandomSentence from "utils/getRandomSentence";
const users = [
	{
		id: 1,
		profile_picture: ppGirl1,
		name: "Love of my life ❤️💜",
		phone_number: "+2348123456789",
		whatsapp_name: "Beyonce",
		unread: 3,
		messages: {
			"2021-06-04": [
				{
					content: getRandomSentence(),
					sender: 1,
					time: "08:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems interesting. Tell me more!",
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 1,
					time: "09:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			"2021-06-10": [
				{
					content: getRandomSentence(),
					sender: 1,
					time: "08:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 1,
					time: "09:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			"2021-06-13": [
				{
					content: getRandomSentence(),
					sender: 1,
					time: "08:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 1,
					time: "09:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "09:15:45",
					status: "delivered",
				},
			],
		},
		group: false,
		pinned: true,
	},
	{
		id: 2,
		profile_picture: ppGirl2,
		name: "Karen Okonkwo",
		phone_number: "+2348123456789",
		whatsapp_name: "Karen O.",
		unread: 0,
		messages: {
			"2021-06-04": [
				{
					content: getRandomSentence(),
					sender: 2,
					time: "08:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 2,
					time: "09:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			"2021-06-10": [
				{
					content: getRandomSentence(),
					sender: 2,
					time: "08:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 2,
					time: "09:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			"2021-06-13": [
				{
					content: getRandomSentence(),
					sender: 2,
					time: "08:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 2,
					time: "09:11:26",
					status: null,
				},
			],
		},
		group: false,
		pinned: true,
	},
	{
		id: 1,
		profile_picture: ppGirl3,
		name: "Titilayo Bello",
		phone_number: "+2348123456789",
		whatsapp_name: "titi123",
		unread: 0,
		messages: {
			"2021-06-04": [
				{
					content: getRandomSentence(),
					sender: 3,
					time: "08:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 3,
					time: "09:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "09:15:45",
					status: "sent",
				},
			],

			"2021-06-10": [
				{
					content: getRandomSentence(),
					sender: 3,
					time: "08:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 3,
					time: "09:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			"2021-06-13": [
				{
					content: getRandomSentence(),
					sender: 3,
					time: "08:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 3,
					time: "09:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "09:15:45",
					status: "sent",
				},
			],
		},
		group: false,
		pinned: true,
	},
	{
		id: 4,
		profile_picture: ppBoy2,
		name: "David Schwimmer",
		phone_number: "+2348123456789",
		whatsapp_name: "David",
		unread: 1,
		messages: {
			"2021-06-04": [
				{
					content: getRandomSentence(),
					sender: 4,
					time: "08:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 4,
					time: "09:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			"2021-06-10": [
				{
					content: getRandomSentence(),
					sender: 4,
					time: "08:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 4,
					time: "09:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			"2021-06-13": [
				{
					content: getRandomSentence(),
					sender: 4,
					time: "08:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 4,
					time: "09:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "09:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 4,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: 4,
					time: "09:11:26",
					status: null,
				},
			],
		},
		group: false,
		pinned: true,
	},

	{
		id: 5,
		profile_picture: ppBoy1,
		name: "Daniel Oladeji",
		phone_number: "+2348123456789",
		whatsapp_name: "Beyonce",
		unread: 0,
		messages: {
			"2021-06-04": [
				{
					content: getRandomSentence(),
					sender: 5,
					time: "08:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 5,
					time: "09:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			"2021-06-10": [
				{
					content: getRandomSentence(),
					sender: 5,
					time: "08:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 5,
					time: "09:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			"2021-06-13": [
				{
					content: getRandomSentence(),
					sender: 5,
					time: "08:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 5,
					time: "09:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],
		},
		group: false,
		pinned: true,
	},
	{
		id: 6,
		profile_picture: ppBoy3,
		name: "Chris Breno",
		phone_number: "+2348123456789",
		whatsapp_name: "Chris",
		unread: 3,
		messages: {
			"2021-06-04": [
				{
					content: getRandomSentence(),
					sender: 6,
					time: "08:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 6,
					time: "09:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			"2021-06-10": [
				{
					content: getRandomSentence(),
					sender: 6,
					time: "08:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 6,
					time: "09:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			"2021-06-13": [
				{
					content: getRandomSentence(),
					sender: 6,
					time: "08:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 6,
					time: "09:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "09:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 6,
					time: "09:11:26",
					status: null,
				},
				{
					content: getRandomSentence(),
					sender: 6,
					time: "09:11:26",
					status: null,
				},
			],
		},
		group: false,
		pinned: true,
	},

	{
		id: 7,
		profile_picture: ppGirl3,
		name: "Karen Okonkwo",
		phone_number: "+2348123456789",
		whatsapp_name: "Karen",
		unread: 0,
		messages: {
			"2021-06-04": [
				{
					content: getRandomSentence(),
					sender: 8,
					time: "08:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 7,
					time: "09:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			"2021-06-10": [
				{
					content: getRandomSentence(),
					sender: 7,
					time: "08:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 7,
					time: "09:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			"2021-06-13": [
				{
					content: getRandomSentence(),
					sender: 7,
					time: "08:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 7,
					time: "09:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],
		},
		group: false,
		pinned: true,
	},

	{
		id: 8,
		profile_picture: ppGirl4,
		name: "Beyoncé Knowles",
		phone_number: "+2348123456789",
		whatsapp_name: "Beyonce",
		unread: 0,
		messages: {
			"2021-06-04": [
				{
					content: getRandomSentence(),
					sender: 8,
					time: "08:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 8,
					time: "09:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			"2021-06-10": [
				{
					content: getRandomSentence(),
					sender: 8,
					time: "08:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 8,
					time: "09:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],

			"2021-06-13": [
				{
					content: getRandomSentence(),
					sender: 8,
					time: "08:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "08:15:45",
					status: "read",
				},
				{
					content: getRandomSentence(),
					sender: 8,
					time: "09:11:26",
					status: null,
				},
				{
					content: "Ooooh. That seems Interesting. Tell me more!",
					sender: null,
					time: "09:15:45",
					status: "read",
				},
			],
		},
		group: false,
		pinned: true,
	},
];

export default users;
