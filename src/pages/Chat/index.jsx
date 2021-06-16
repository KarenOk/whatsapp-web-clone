import React, { useState } from "react";
import "./styles.css";
import Icon from "components/Icon";
import avatar from "assets/images/profile-picture-girl-4.jpeg";

// import emojiList from "emojis-list";

// console.log(emojiList);
// let index = emojiList.findIndex((emoji) => emoji === "😊");
// console.log(index);
// 1759 - 1940

const Chat = () => {
	const [showAttach, setShowAttach] = useState(false);

	return (
		<div className="chat">
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
			<div className="chat__content">
				<div className="chat__bg"></div>
				{/* <div className="chat__emojis-wrapper"></div> */}
			</div>
			<div className="chat__input-wrapper">
				<button aria-label="Emojis">
					<Icon
						id="smiley"
						className="chat__input-icon chat__input-icon--highlight"
					/>
				</button>
				<div className="pos-rel">
					<button
						aria-label="Attach"
						onClick={() => setShowAttach(!showAttach)}
					>
						<Icon
							id="attach"
							className={`chat__input-icon ${
								showAttach ? "chat__input-icon--pressed" : ""
							}`}
						/>
					</button>

					<div
						className={`chat__attach ${
							showAttach ? "chat__attach--active" : ""
						}`}
					>
						<button className="chat__attach-btn" aria-label="Emojis">
							<Icon id="attachRooms" className="chat__attach-icon" />
						</button>
						<button className="chat__attach-btn" aria-label="Attach">
							<Icon id="attachContacts" className="chat__attach-icon" />
						</button>
						<button className="chat__attach-btn" aria-label="Record voice note">
							<Icon id="attachDocument" className="chat__attach-icon" />
						</button>
						<button className="chat__attach-btn" aria-label="Attach">
							<Icon id="attachCamera" className="chat__attach-icon" />
						</button>
						<button className="chat__attach-btn" aria-label="Record voice note">
							<Icon id="attachImage" className="chat__attach-icon" />
						</button>
					</div>
				</div>
				<input className="chat__input" placeholder="Type a message" />
				<button aria-label="Record voice note">
					<Icon id="microphone" className="chat__input-icon" />
				</button>
			</div>
		</div>
	);
};

export default Chat;
