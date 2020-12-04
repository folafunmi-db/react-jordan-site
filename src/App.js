import "./App.scss";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const routes = [
	{ path: "/", name: "Home", Component: Home },
	{ path: "/shop", name: "About", Component: Shop },
];

function App() {
	const onEnter = (node) => {
		//enter animation
		gsap.from(
			[
				// node.children[0].firstElementChild,
				// node.children[0].lastElementChild,
			],
			0.6,
			{
				y: 30,
				delay: 0.6,
				ease: "power3.easeInOut",
				opacity: 0,
				stagger: 0.6,
			}
		);
	};

	const onExit = (node) => {
		//exit animation
		gsap.to(
			[
				// node.children[0].firstElementChild,
				// node.children[0].lastElementChild,
			],
			0.6,
			{
				y: -30,
				ease: "power3.easeInOut",
				stagger: 0.6,
			}
		);
	};
	return (
		<div className="App">
			{routes.map(({ path, Component }) => (
				<Route key={"name"} path={path} exact>
					{({ match }) => (
						<CSSTransition
							in={match != null}
							timeout={1200}
							classNames="page"
							onExit={onExit}
							onEnter={onEnter}
							unmountOnExit
						>
							<div className="page">
								<Component />
							</div>
						</CSSTransition>
					)}
				</Route>
			))}
			<div className="copyright">
				Made with 💛 by{" "}
				<Link
					to="https://github.com/folafunmi-db"
					className="copy-link"
				>
					Folafunmi
				</Link>{" "}
				| Based on a design by Godson C. JNR.
			</div>
		</div>
	);
}

export default App;
