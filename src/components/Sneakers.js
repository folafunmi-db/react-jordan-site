import Sneaker1 from "../assets/air-max-270-total-orange-best-nike-shoes.png";
import Sneaker2 from "../assets/nike-basketball-logo-png_7699741.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Sneakers = () => {
	const Sneaker = [Sneaker1, Sneaker2];
	return (
		<div className="sneaker">
			<img src={Sneaker1} alt="Nike Sneaker" />
			<div className="sneaker-dir">
				<IoIosArrowBack className="arr" />
				<IoIosArrowForward className="arr" />
			</div>
		</div>
	);
};

export default Sneakers;
