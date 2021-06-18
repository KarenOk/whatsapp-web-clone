import React from "react";
import "./styles/main.css";
import Icon from "../Icon";

const Loader = ({ done }) => {
	return (
		<div className="loader">
			<div className="loader__logo-wrapper">
				<Icon id="whatsapp" className="loader__logo" />
			</div>
			<div
				className={`loader__progress ${done ? "loader__progress--done" : ""}`}
			></div>
			<h1 className="loader__title"> Whatsapp</h1>
			<p className="loader__desc">
				<Icon id="lock" className="loader__icon" />
				End-to-end encrypted. Built by Karen Okonkwo.
			</p>
		</div>
	);
};

export default Loader;
