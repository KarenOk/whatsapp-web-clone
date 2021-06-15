import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "./components/Loader";
import Home from "./pages/Home";

function App() {
	const [appLoaded, setAppLoaded] = useState(false);

	useEffect(() => {
		window.addEventListener("load", stopLoad);
		return () => window.removeEventListener("load", stopLoad);
	}, []);

	const stopLoad = () => setAppLoaded(true);

	if (!appLoaded) return <Loader done={appLoaded} />;

	return (
		<div className="app">
			<Router>
				<Switch>
					<Route path="/" component={Home} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
