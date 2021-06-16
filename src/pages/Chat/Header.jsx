import React from "react";
import Icon from "components/Icon";
import avatar from "assets/images/profile-picture-girl-4.jpeg";

const Header = () => {
	return (
		<header className="chat__header">
			<div className="chat__avatar-wrapper">
				<img src={avatar} alt="Karen Okonkwo" className="chat__avatar" />
			</div>

			<div className="chat__contact-wrapper">
				<h2 className="chat__contact-name"> Karen Okonkwo</h2>
				<p className="chat__contact-desc"> online </p>
			</div>
			<div className="chat__actions">
				<button className="chat__action" aria-label="Search">
					<Icon
						id="search"
						className="chat__action-icon chat__action-icon--search"
					/>
				</button>
				<button className="chat__action" aria-label="Menu">
					<Icon id="menu" className="chat__action-icon" />
				</button>
			</div>
		</header>
	);
};

export default Header;
