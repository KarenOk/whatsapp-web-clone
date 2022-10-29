import Icon from "components/Icon";
import React from "react";
import "./styles.css";

const Checkbox = ({ inputProps }) => {
	return (
		<div className="checkbox">
			<input
				type="checkbox"
				id="checkbox"
				{...inputProps}
				className="checkbox__input"
			/>
			<label htmlFor="checkbox" className="checkbox__label">
				<Icon id="check" className="checkbox__icon" />
			</label>
		</div>
	);
};

export default Checkbox;
