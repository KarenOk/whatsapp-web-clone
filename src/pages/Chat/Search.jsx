import Icon from "components/Icon";
import React from "react";

const Search = () => {
	return (
		<>
			<div className="search-wrapper">
				<div className="search-icons">
					<Icon id="search" className="search-icon" />
					<button className="search__back-btn">
						<Icon id="back" />
					</button>
				</div>
				<input className="search" placeholder="Search..." />
			</div>
			<div className="chat-sidebar__search-results">
				<p> Search for messages with Karen Okonkwo.</p>
			</div>
		</>
	);
};

export default Search;
