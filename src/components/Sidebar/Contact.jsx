import React, { useState } from "react";
import Icon from "components/Icon";

const Contact = ({ contact }) => {
	const getLastMessage = () => {
		const messageDates = Object.keys(contact.messages);
		const recentMessageDate = messageDates[messageDates.length - 1];
		const messages = [...contact.messages[recentMessageDate]];
		const lastMessage = messages.pop();
		return lastMessage;
	};

	const lastMessage = getLastMessage(contact);

	return (
		<div className="sidebar-contact">
			<div className="sidebar-contact__avatar-wrapper">
				<img
					src={contact.profile_picture}
					alt={contact.profile_picture}
					className="sidebar__avatar"
				/>
			</div>
			<div className="sidebar-contact__content">
				<div className="sidebar-contact__top-content">
					<h2 className="sidebar-contact__name"> {contact.name} </h2>
					<span className="sidebar-contact__time"> 02:45 </span>
				</div>
				<div className="sidebar-contact__bottom-content">
					<p className="sidebar-contact__message-wrapper">
						{lastMessage.status && (
							<Icon
								id={
									lastMessage?.status === "sent" ? "singleTick" : "doubleTick"
								}
								aria-label={lastMessage?.status}
								className={`sidebar-contact__message-icon ${
									lastMessage?.status === "read"
										? "sidebar-contact__message-icon--blue"
										: ""
								}`}
							/>
						)}
						<span
							className={`sidebar-contact__message ${
								lastMessage?.status === "read"
									? "sidebar-contact__message--unread"
									: ""
							}`}
						>
							{lastMessage?.content}
						</span>
					</p>
					<div className="sidebar-contact__icons">
						<Icon id="pinned" className="sidebar-contact__icon" />
						{!!contact.unread && (
							<span className="sidebar-contact__unread">{contact.unread}</span>
						)}
						<button aria-label="sidebar-contact__btn">
							<Icon
								id="downArrow"
								className="sidebar-contact__icon sidebar-contact__icon--dropdown"
							/>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
