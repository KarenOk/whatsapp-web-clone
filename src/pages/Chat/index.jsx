import React, { useState } from "react";
import "./styles.css";
import EmojiTray from "./components/EmojiTray";
import ChatInput from "./components/ChatInput";
import Header from "./components/Header";
import ChatSidebar from "./components/ChatSidebar";
import Icon from "components/Icon";
import Search from "./components/Search";
import Profile from "./components/Profile";

const Chat = () => {
	const [showAttach, setShowAttach] = useState(false);
	const [showEmojis, setShowEmojis] = useState(false);
	const [showSidebar, setShowSidebar] = useState(false);

	return (
		<div className="chat">
			<div className="chat__body">
				<Header openSidebar={() => setShowSidebar(true)} />
				<div className="chat__content">
					<div className="chat__bg"></div>
					<button className="chat__scroll-btn">
						<Icon id="downArrow" />
					</button>
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
			{/* <ChatSidebar
				heading="Search Messages"
				active={showSidebar}
				closeSidebar={() => setShowSidebar(false)}
			>
				<Search />
			</ChatSidebar> */}

			<ChatSidebar
				heading="Contact Info"
				active={showSidebar}
				closeSidebar={() => setShowSidebar(false)}
			>
				<Profile />
			</ChatSidebar>
		</div>
	);
};

export default Chat;
