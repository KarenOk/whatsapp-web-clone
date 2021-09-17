import React, { useMemo, useState } from "react";
import "./styles/main.css";
import avatar from "assets/images/profile-picture-girl-1.jpeg";
import Icon from "components/Icon";
import Alert from "./Alert";
import Contact from "./Contact";
import OptionsBtn from "components/OptionsButton";
import { useUsersContext } from "context/usersContext";

const Sidebar = () => {
	const { users: contacts } = useUsersContext();
	const [search, setSearch] = useState('');

	const filteredContacts = useMemo(() => {
		if (!search) {return contacts};
		return contacts.filter(c => c.name.toLowerCase().search(search.toLowerCase()) > -1)
	}, [contacts, search]);

	return (
		<aside className="sidebar">
			<header className="header">
				<div className="sidebar__avatar-wrapper">
					<img src={avatar} alt="Karen Okonkwo" className="avatar" />
				</div>
				<div className="sidebar__actions">
					<button className="sidebar__action" aria-label="Status">
						<Icon
							id="status"
							className="sidebar__action-icon sidebar__action-icon--status"
						/>
					</button>
					<button className="sidebar__action" aria-label="New chat">
						<Icon id="chat" className="sidebar__action-icon" />
					</button>
					<OptionsBtn
						className="sidebar__action"
						ariaLabel="Menu"
						iconId="menu"
						iconClassName="sidebar__action-icon"
						options={[
							"New group",
							"Create a room",
							"Profile",
							"Archived",
							"Starred",
							"Settings",
							"Log out",
						]}
					/>
				</div>
			</header>
			<Alert />
			<div className="search-wrapper">
				<div className="search-icons">
					<Icon id="search" className="search-icon" />
					<button className="search__back-btn">
						<Icon id="back" />
					</button>
				</div>
				<input className="search" placeholder="Search or start a new chat" value={search} onChange={e => setSearch(e.target.value)}/>
			</div>
		{ filteredContacts.length > 0 ? (
			<div className="sidebar__contacts">
			{filteredContacts.map((contact, index) => (
				<Contact key={index} contact={contact} />
			))}
		</div>
		): (
			<div className="sidebar__empty-contacts">
				No contacts found
			</div>
		)}
			
		</aside>
	);
};

export default Sidebar;
