import React from "react";
import Icon from "components/Icon";

const ChatInput = ({
	showAttach,
	setShowAttach,
	showEmojis,
	setShowEmojis,
}) => {
	return (
		<div className="chat__input-wrapper">
			{showEmojis && (
				<button aria-label="Close emojis" onClick={() => setShowEmojis(false)}>
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
				<button aria-label="Attach" onClick={() => setShowAttach(!showAttach)}>
					<Icon
						id="attach"
						className={`chat__input-icon ${
							showAttach ? "chat__input-icon--pressed" : ""
						}`}
					/>
				</button>

				<div
					className={`chat__attach ${showAttach ? "chat__attach--active" : ""}`}
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
	);
};

export default ChatInput;
