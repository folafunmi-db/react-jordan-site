import Menubar from "./Menubar";
import ShopContent from "./ShopContent";

const Main = () => {
	return (
		<main className="main2">
			<Menubar pg={"shop"} />
			<ShopContent />
			<div className="shop-back"></div>
		</main>
	);
};

export default Main;
