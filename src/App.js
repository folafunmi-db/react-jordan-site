import "./App.scss";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

import { Route } from "react-router-dom";

const routes = [
	{ path: "/", name: "Home", Component: Home },
	{ path: "/shop", name: "About", Component: Shop },
];

function App() {
	return (
		<div className="App">
			<div className="pl">Please 🥺🙏🏾 view on a large screen</div>
			{routes.map(({ path, Component, name }) => (
				<Route key={name} path={path} exact>
					<div className="page">
						<Component />
					</div>
				</Route>
			))}
			<div className="copyright">
				Made with 💛 by{" "}
				<a
					href="https://github.com/folafunmi-db"
					className="copy-link"
				>
					Folafunmi
				</a>{" "}
				| Based on a design by Godson C. JNR.
			</div>
		</div>
	);
}

export default App;
