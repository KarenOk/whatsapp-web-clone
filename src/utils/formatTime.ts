const formatTime = (timeString) => {
	let splitTimeString = timeString.split(":");
	return `${splitTimeString[0]}:${splitTimeString[1]}`;
};

export default formatTime;
