import { gsap } from "gsap";
// import { Link } from "react-router-dom";

import Menubar from "./Menubar";
import Content from "./Content";

const Main = () => {
	return (
		<main className="main">
			<Menubar />
			<Content />
    <div className="back">NIKE</div>
		</main>
	);
};

export default Main;
