import React from "react";
import Icon from "components/Icon";
import avatar from "assets/images/profile-picture-girl-4.jpeg";
import OptionsBtn from "components/OptionsButton";

const Header = ({ openProfileSidebar, openSearchSidebar }) => {
	return (
		<header className="header">
			<div className="chat__avatar-wrapper" onClick={openProfileSidebar}>
				<img src={avatar} alt="Karen Okonkwo" className="avatar" />
			</div>

			<div className="chat__contact-wrapper" onClick={openProfileSidebar}>
				<h2 className="chat__contact-name"> Karen Okonkwo</h2>
				<p className="chat__contact-desc"> online </p>
			</div>
			<div className="chat__actions">
				<button
					className="chat__action"
					aria-label="Search"
					onClick={openSearchSidebar}
				>
					<Icon
						id="search"
						className="chat__action-icon chat__action-icon--search"
					/>
				</button>
				<OptionsBtn
					className="chat__action"
					ariaLabel="Menu"
					iconId="menu"
					iconClassName="chat__action-icon"
					options={[
						"Contact Info",
						"Select Messages",
						"Mute notifications",
						"Clear messages",
						"Delete chat",
					]}
				/>
			</div>
		</header>
	);
};

export default Header;
