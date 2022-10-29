import Icon from "components/Icon";
import React from "react";
import "./styles.css";

type Props = {
  [x: string]: any;
};

const Checkbox = ({ inputProps }: Props) => {
  return (
    <div className="checkbox">
      <input type="checkbox" id="checkbox" {...inputProps} className="checkbox__input" />
      <label htmlFor="checkbox" className="checkbox__label">
        <Icon id="check" className="checkbox__icon" />
      </label>
    </div>
  );
};

export default Checkbox;
