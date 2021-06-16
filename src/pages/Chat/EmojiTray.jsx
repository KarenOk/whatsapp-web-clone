import React from "react";
import emojisList from "emojis-list";
import Icon from "components/Icon";

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

const EmojiTray = ({ showEmojis }) => {
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
	);
};

export default EmojiTray;
