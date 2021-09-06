import { createContext, useContext, useEffect, useState } from "react";
import contacts from "data/contacts";
import { useSocketContext } from "./socketContext";

const UsersContext = createContext();

const useUsersContext = () => useContext(UsersContext);

const UsersProvider = ({ children }) => {
	const socket = useSocketContext();

	const [users, setUsers] = useState(contacts);

	useEffect(() => {
		socket.on("fetch_response", (data) => {
			console.log("Response", data.response);
		});

		socket.on("start_typing", (data) => {
			const { userId } = data;
			_updateUserProp(userId, "typing", true);
		});

		socket.on("stop_typing", (data) => {
			const { userId } = data;
			_updateUserProp(userId, "typing", false);
		});
	}, [socket]);

	const _updateUserProp = (userId, prop, value) => {
		let userIndex = users.findIndex((user) => user.id === userId);
		const usersCopy = [...users];
		const userObject = usersCopy[userIndex];
		usersCopy[userIndex] = { ...userObject, [prop]: value };
		setUsers(usersCopy);
	};

	const setUserAsUnread = (userId) => {
		_updateUserProp(userId, "unread", 0);
	};

	const addNewMessage = (userId, message) => {
		let userIndex = users.findIndex((user) => user.id === userId);
		const usersCopy = [...users];
		const newMsgObject = {
			content: message,
			sender: null,
			time: new Date().toLocaleTimeString(),
			status: "delivered",
		};
		usersCopy[userIndex].messages.TODAY.push(newMsgObject);
		setUsers(usersCopy);

		socket.emit("fetch_response", { userId });
	};

	const fetchMessageResponse = () => {};

	return (
		<UsersContext.Provider value={{ users, setUserAsUnread, addNewMessage }}>
			{children}
		</UsersContext.Provider>
	);
};

export { useUsersContext, UsersProvider };
