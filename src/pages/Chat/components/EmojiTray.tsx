import React from "react";
import Icon from "components/Icon";

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

const EmojiTray = ({ showEmojis, newMessage, setNewMessage }) => {
	const addEmoji = (emoji) => {
		setNewMessage(newMessage + emoji);
	};

	return (
		<div
			className={`emojis__wrapper ${
				showEmojis ? "emojis__wrapper--active" : ""
			}`}
		>
			<div className="emojis__tabs">
				{emojiTabs.map((tab) => (
					<div
						className={`emojis__tab ${tab.active ? "emojis__tab--active" : ""}`}
						key={tab.label}
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
					{new Array(6).fill(null).map((_, rowIndex) =>
						new Array(11).fill(null).map((_, colIndex) => (
							<div
								role="img"
								aria-label="emoji"
								// onClick={() => addEmoji("emoji")}
								key={`${rowIndex}-${colIndex}`}
								className="emoji emojis__emoji"
								style={{
									backgroundPositionX: -3 - 44.2 * colIndex,
									backgroundPositionY: -6 - 52 * rowIndex,
								}}
							></div>
						))
					)}
				</div>
				<h4 className="emojis__label"> Animals {"&"} Nature </h4>
				<div className="emojis__grid">
					{new Array(6).fill(null).map((_, rowIndex) =>
						new Array(11).fill(null).map((_, colIndex) => (
							<div
								role="img"
								aria-label="emoji"
								// onClick={() => addEmoji("emoji")}
								key={`${rowIndex}-${colIndex}`}
								className="emoji emojis__emoji"
								style={{
									backgroundPositionX: -3 - 44.2 * colIndex,
									backgroundPositionY: -6 - 52 * rowIndex,
								}}
							></div>
						))
					)}
				</div>
			</div>
		</div>
	);
};

export default EmojiTray;
