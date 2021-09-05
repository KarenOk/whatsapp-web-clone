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
			console.log(data.userId, "is typing...");
		});

		socket.on("stop_typing", (data) => {
			console.log(data.userId, "stopped typing");
		});
	}, [socket]);

	const setUserAsUnread = (userId) => {
		let userIndex = users.findIndex((user) => user.id === userId);
		const temp = [...users];
		const userObject = users[userIndex];
		temp[userIndex] = { ...userObject, unread: 0 };
		setUsers(temp);
	};

	const addNewMessage = (userId, message) => {
		let userIndex = users.findIndex((user) => user.id === userId);
		const temp = [...users];
		const userObject = temp[userIndex];
		const newMsgObject = {
			content: message,
			sender: null,
			time: new Date().toLocaleTimeString(),
			status: "delivered",
		};
		userObject.messages.TODAY.push(newMsgObject);
		setUsers(temp);

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
