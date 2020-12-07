import Menubar from "./Menubar";
import Content from "./Content";

const Main = () => {
	return (
		<main className="main">
			<Menubar pg={"menu"} />
			<Content />
			<div className="back">NIKE</div>
		</main>
	);
};

export default Main;
