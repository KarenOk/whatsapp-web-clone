import React from "react";
import Icon from "components/Icon";

const ChatSidebar = ({ active, closeSidebar }) => {
	return (
		<aside className={`chat-sidebar ${active ? "chat-sidebar--active" : ""}`}>
			<header className="header">
				<button onClick={closeSidebar}>
					<Icon id="cancel" className="chat-sidebar__header-icon" />
				</button>
				<h2 className="chat-sidebar__heading"> Search Messages</h2>
			</header>
			<div className="chat-sidebar__content">
				<div className="search-wrapper">
					<div className="search-icons">
						<Icon id="search" className="search-icon" />
						<button className="search__back-btn">
							<Icon id="back" />
						</button>
					</div>
					<input className="search" placeholder="Search..." />
				</div>
				<div className="chat-sidebar__search-results">
					<p> Search for messages with Karen Okonkwo.</p>
				</div>
			</div>
		</aside>
	);
};

export default ChatSidebar;
