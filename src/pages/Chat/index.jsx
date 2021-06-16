import React, { useState } from "react";
import "./styles.css";
import emojisList from "emojis-list";
import Icon from "components/Icon";
import avatar from "assets/images/profile-picture-girl-4.jpeg";

const emojis = emojisList.slice(1759, 1900);

const emojiTabs = [
	{ icon: "recent", label: "Recent emojis", active: true },
	{ icon: "emojiPeople", label: "People emojis", active: false },
	{ icon: "emojiNature", label: "Nature emojis", active: false },
	{ icon: "emojiFood", label: "Food emojis", active: false },
	{ icon: "emojiActivity", label: "Activity emojis", active: false },
	{ icon: "emojiTravel", label: "Travel emojis", active: false },
	{ icon: "emojiObjects", label: "Object emojis", active: false },
	{ icon: "emojiSymbols", label: "Symbol emojis", active: false },
	{ icon: "emojiFlags", label: "Flag emojis", active: false },
];

const Chat = () => {
	const [showAttach, setShowAttach] = useState(false);
	const [showEmojis, setShowEmojis] = useState(false);

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
			</div>
			<footer className="chat__footer">
				<div
					className={`emojis__wrapper ${
						showEmojis ? "emojis__wrapper--active" : ""
					}`}
				>
					<div className="emojis__tabs">
						{emojiTabs.map((tab) => (
							<div
								className={`emojis__tab ${
									tab.active ? "emojis__tab--active" : ""
								}`}
							>
								<button aria-label={tab.label} key={tab.icon}>
									<Icon id={tab.icon} className="emojis__tab-icon" />
								</button>
							</div>
						))}
					</div>
					<div className="emojis__content">
						<input className="emojis__search" placeholder="Search Emoji" />
						<h4 className="emojis__label"> Smileys {"&"} People </h4>
						<div className="emojis__grid">
							{emojis.map((emoji) => (
								<p role="img" aria-label="emoji" className="emojis__emoji">
									{emoji}
								</p>
							))}
						</div>
						<h4 className="emojis__label"> Animals {"&"} Nature </h4>
						<div className="emojis__grid">
							{emojis.map((emoji) => (
								<p role="img" aria-label="emoji" className="emojis__emoji">
									{emoji}
								</p>
							))}
						</div>
					</div>
				</div>
				<div className="chat__input-wrapper">
					{showEmojis && (
						<button
							aria-label="Close emojis"
							onClick={() => setShowEmojis(false)}
						>
							<Icon id="cancel" className="chat__input-icon" />
						</button>
					)}
					<button aria-label="Emojis" onClick={() => setShowEmojis(true)}>
						<Icon
							id="smiley"
							className={`chat__input-icon ${
								showEmojis ? "chat__input-icon--highlight" : ""
							}`}
						/>
					</button>
					{showEmojis && (
						<>
							<button aria-label="GIF">
								<Icon id="gif" className="chat__input-icon" />
							</button>
							<button aria-label="Stickers">
								<Icon id="sticker" className="chat__input-icon" />
							</button>
						</>
					)}
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
							<button className="chat__attach-btn" aria-label="Choose room">
								<Icon id="attachRooms" className="chat__attach-icon" />
							</button>
							<button className="chat__attach-btn" aria-label="Choose contact">
								<Icon id="attachContacts" className="chat__attach-icon" />
							</button>
							<button className="chat__attach-btn" aria-label="Choose document">
								<Icon id="attachDocument" className="chat__attach-icon" />
							</button>
							<button className="chat__attach-btn" aria-label="Use camera">
								<Icon id="attachCamera" className="chat__attach-icon" />
							</button>
							<button className="chat__attach-btn" aria-label="Choose image">
								<Icon id="attachImage" className="chat__attach-icon" />
							</button>
						</div>
					</div>
					<input className="chat__input" placeholder="Type a message" />
					<button aria-label="Record voice note">
						<Icon id="microphone" className="chat__input-icon" />
					</button>
				</div>
			</footer>
		</div>
	);
};

export default Chat;
