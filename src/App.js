import React, { useEffect, useState } from "react";
import Loader from "./components/Loader";

function App() {
	const [appLoaded, setAppLoaded] = useState(false);

	useEffect(() => {
		window.addEventListener("load", stopLoad);
		return () => window.removeEventListener("load", stopLoad);
	}, []);

	const stopLoad = () => setAppLoaded(true);

	return (
		<div className="app">
			<Loader done={appLoaded} />
		</div>
	);
}

export default App;
