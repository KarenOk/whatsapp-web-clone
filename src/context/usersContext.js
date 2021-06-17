import { createContext, useContext, useState } from "react";
import contacts from "data/contacts";

const UsersContext = createContext();

const useUsersContext = () => useContext(UsersContext);

const UsersProvider = ({ children }) => {
	const [users, setUsers] = useState(contacts);

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
	};

	return (
		<UsersContext.Provider value={{ users, setUserAsUnread, addNewMessage }}>
			{children}
		</UsersContext.Provider>
	);
};

export { useUsersContext, UsersProvider };
