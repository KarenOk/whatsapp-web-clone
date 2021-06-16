import React, { useState } from "react";
import "./styles.css";
import EmojiTray from "./EmojiTray";
import ChatInput from "./ChatInput";
import Header from "./Header";

const Chat = () => {
	const [showAttach, setShowAttach] = useState(false);
	const [showEmojis, setShowEmojis] = useState(false);

	return (
		<div className="chat">
			<Header />
			<div className="chat__content">
				<div className="chat__bg"></div>
			</div>
			<footer className="chat__footer">
				<EmojiTray showEmojis={showEmojis} />
				<ChatInput
					showEmojis={showEmojis}
					setShowEmojis={setShowEmojis}
					showAttach={showAttach}
					setShowAttach={setShowAttach}
				/>
			</footer>
		</div>
	);
};

export default Chat;
