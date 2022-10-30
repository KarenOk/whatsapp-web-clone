import React, { useState } from "react";
import Icon from "components/Icon";
import "./styles/main.css";

type Props = {
  className?: string;
  iconId?: string;
  iconClassName?: string;
  ariaLabel?: string;
  options?: any[];
  position?: string;
  showPressed?: boolean;
  [x: string]: any;
};

const OptionsBtn = ({
  className,
  iconId,
  iconClassName,
  ariaLabel,
  options = [],
  position = "left",
  showPressed = true,
  ...props
}: Props) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="pos-rel">
      <button
        aria-label={ariaLabel}
        className={`options-btn ${showOptions && showPressed ? "options-btn--pressed" : ""} ${
          className || ""
        }`}
        onClick={() => setShowOptions(!showOptions)}
        {...props}
      >
        <Icon id={iconId} className={iconClassName} />
      </button>
      <ul
        className={`options-btn__options ${showOptions ? "options-btn__options--active" : ""} ${
          position === "right" ? "options-btn__options--right" : ""
        }`}
      >
        {options.map((option, index) => (
          <li className="options-btn__option" key={index}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OptionsBtn;
