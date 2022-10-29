import Icons from "assets/icons";

const allIcons = Icons;

const Icon = ({ id, ...props }) => {
	const selectedIcon = allIcons[id];
	return selectedIcon ? selectedIcon(props) : null;
};

export default Icon;
