import Icon from "components/Icon";
import React from "react";

const Convo = () => {
	return new Array(10).fill(null).map((_, index) => (
		<>
			<div className="chat__date-wrapper">
				<span className="chat__date"> 6/10/2021</span>
			</div>
			{index === 0 && (
				<p className="chat__encryption-msg">
					<Icon id="lock" className="chat__encryption-icon" />
					Messages are end-to-end encrypted. No one outside of this chat, not
					even WhatsApp, can read or listen to them. Click to learn more.
				</p>
			)}
			<div className="chat__msg-group chat__msg-group--sent">
				<p className="chat__msg chat__msg--sent">
					<span>
						You've never had this much money to even owe in the first placee
					</span>
					<span className="chat__time"> 02:55</span>
				</p>
				<p className="chat__msg chat__msg--sent">
					<span>
						{`HTML5 Web Storage is vulnerable to XSS, has a larger attack
                            surface area, and can impact all application users on a
                            successful attack.
                            
                            Questions or comments? We would love to
                            hear them! Let me know if you have any questions in the
                            discussion below or at tom@stormpath.com / @omgitstom. Like
                            what you see? to keep up with the latest releases. SEARCH
                            FOR`}
					</span>
					<span className="chat__time"> 02:55</span>
				</p>
			</div>
			<div className="chat__msg-group chat__msg-group--rxd">
				<p className="chat__msg chat__msg--rxd">
					<span> This is a random message </span>
					<span className="chat__time"> 02:55</span>
				</p>
				<p className="chat__msg chat__msg--rxd">
					<span> This is a random message </span>
					<span className="chat__time"> 02:55</span>
				</p>
			</div>
		</>
	));
};

export default Convo;
