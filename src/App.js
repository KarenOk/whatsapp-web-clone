import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import Sidebar from "components/Sidebar";

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
			<div className="app-content">
				<Sidebar />
				<Router>
					<Switch>
						<Route path="/" component={Home} />
					</Switch>
				</Router>
			</div>
		</div>
	);
}

export default App;
