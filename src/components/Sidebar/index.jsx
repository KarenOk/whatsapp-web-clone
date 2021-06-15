import React from "react";
import "./styles.css";
import avatar from "assets/images/profile-picture.jpeg";
import Icon from "components/Icon";

const alerts = [
	<div className="sidebar__alert sidebar__alert--info">
		<div className="sidebar__alert-icon-wrapper">
			<Icon id="notification" className="sidebar__alert-icon" />
		</div>
		<div className="sidebar__alert-texts">
			<p className="sidebar__alert-text"> Get notified of new messages </p>
			<p className="sidebar__alert-text"> Turn on your notifications </p>
		</div>
	</div>,
	<div className="sidebar__alert sidebar__alert--danger">
		<div className="sidebar__alert-icon-wrapper">
			<Icon id="notification" className="sidebar__alert-icon" />
		</div>
		<div className="sidebar__alert-texts">
			<p className="sidebar__alert-text"> Phone battery low </p>
			<p className="sidebar__alert-text">
				Charge your phone to keep using Whatsapp.
			</p>
		</div>
	</div>,
	<div className="sidebar__alert sidebar__alert--warning">
		<div className="sidebar__alert-icon-wrapper">
			<Icon id="noWifi" className="sidebar__alert-icon" />
		</div>
		<div className="sidebar__alert-texts">
			<p className="sidebar__alert-text"> Phone Not Connected</p>
			<p className="sidebar__alert-text">
				Make sure your phone has an active internet connection.{" "}
				<a
					className="underline"
					href="https://faq.whatsapp.com/web/troubleshooting/cant-connect-to-whatsapp-web-or-desktop/"
					target="_blank"
				>
					{" "}
					Learn more.{" "}
				</a>
			</p>
		</div>
	</div>,
];
const randomAlert = alerts.sort(() => 0.5 - Math.random())[0];

const Sidebar = () => {
	return (
		<aside className="sidebar">
			<header className="sidebar__header">
				<div className="sidebar__avatar-wrapper">
					<img src={avatar} alt="Karen Okonkwo" className="sidebar__avatar" />
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
					<button className="sidebar__action" aria-label="Menu">
						<Icon id="menu" className="sidebar__action-icon" />
					</button>
				</div>
			</header>
			{randomAlert}
			<div className="sidebar__search-wrapper">
				<Icon id="back" className="sidebar__search-icon" />
				<input
					className="sidebar__search"
					placeholder="Search or start a new chat"
				/>
			</div>
			<div className="sidebar__contacts">
				<p> Coming soon</p>
			</div>
		</aside>
	);
};

export default Sidebar;
