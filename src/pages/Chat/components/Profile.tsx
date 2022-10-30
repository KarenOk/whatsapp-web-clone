import React from "react";
import groupAvatar from "assets/images/women.png";
import media from "assets/images/placeholder.jpeg";
import Checkbox from "components/Checkbox";
import Icon from "components/Icon";

const groups = [
	{
		name: "Group 1",
		avatar: groupAvatar,
		members:
			"Michelle Obama, Sandra Bullock, Kerry Washington, Beyonce Knowles, Kamala Harris, You",
	},
	{
		name: "Group 2",
		avatar: groupAvatar,
		members:
			"Michelle Obama, Sandra Bullock, Kerry Washington, Beyonce Knowles, Kamala Harris, You",
	},
	{
		name: "Group 3",
		avatar: groupAvatar,
		members:
			"Michelle Obama, Sandra Bullock, Kerry Washington, Beyonce Knowles, Kamala Harris, You",
	},
];

const Profile = ({ user }) => {
	return (
		<div className="profile">
			<div className="profile__section profile__section--personal">
				<div className="profile__avatar-wrapper">
					<img src={user.profile_picture} alt={user.name} className="avatar" />
				</div>
				<h2 className="profile__name"> {user.name} </h2>
			</div>

			<div className="profile__section profile__section--media">
				<div className="sb profile__heading-wrapper">
					<h2 className="profile__heading"> Media, Links and Documents </h2>
					<button>
						<Icon id="rightArrow" className="profile__heading-icon" />
					</button>
				</div>
				<div className="profile__media-wrapper">
					<img src={media} alt="media" className="profile__media" />
					<img src={media} alt="media" className="profile__media" />
					<img src={media} alt="media" className="profile__media" />
				</div>
			</div>

			<ul className="profile__section profile__section--actions">
				<li className="profile__action">
					<p className="profile__action-left">
						<span className="profile__action-text profile__action-text--top">
							Mute Notifications
						</span>
					</p>
					<div className="profile__action-right">
						<Checkbox />
					</div>
				</li>
				<li className="profile__action">
					<p className="profile__action-left">
						<span className="profile__action-text profile__action-text--top">
							Starred Messages
						</span>
					</p>
					<button className="profile__action-right">
						<Icon id="rightArrow" className="profile__heading-icon" />
					</button>
				</li>
				<li className="profile__action">
					<p className="profile__action-left">
						<span className="profile__action-text profile__action-text--top">
							Disappearing Messages
						</span>
						<span className="profile__action-text profile__action-text--bottom">
							Off
						</span>
					</p>
					<button className="profile__action-right">
						<Icon id="rightArrow" className="profile__heading-icon" />{" "}
					</button>
				</li>
			</ul>

			<div className="profile__section profile__section--about">
				<div className="sb profile__heading-wrapper">
					<h2 className="profile__heading"> About and phone number </h2>
				</div>
				<ul>
					<li className="profile__about-item">
						Out here saving the world, one block of code at a time.
					</li>
					<li className="profile__about-item">+23423456789</li>
				</ul>
			</div>

			<div className="profile__section profile__section--groups">
				<div className="profile__heading-wrapper">
					<h2 className="sb profile__heading profile__group-heading">
						<span> Groups in common </span> <span> 3</span>
					</h2>
				</div>
				{groups.map((group) => (
					<div className="profile__group" key={group.name}>
						<div className="profile__group-avatar-wrapper">
							<img src={group.avatar} alt="Group 3" className="avatar" />
						</div>
						<div className="profile__group-content">
							<p className="profile__group-text profile__group-text--top">
								{group.name}
							</p>
							<p className="profile__group-text profile__group-text--bottom">
								{group.members}
							</p>
						</div>
					</div>
				))}
			</div>

			<div className="profile__section profile__section--danger">
				<Icon id="block" className="profile__danger-icon" />
				<p className="profile__danger-text"> Block </p>
			</div>

			<div className="profile__section profile__section--danger">
				<Icon id="thumbsDown" className="profile__danger-icon" />
				<p className="profile__danger-text"> Report contact </p>
			</div>

			<div className="profile__section profile__section--danger">
				<Icon id="delete" className="profile__danger-icon" />
				<p className="profile__danger-text"> Delete chat </p>
			</div>
		</div>
	);
};

export default Profile;
