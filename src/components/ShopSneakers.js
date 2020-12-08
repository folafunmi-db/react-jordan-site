import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import Kyrie1 from "../assets/kyrie1.png";
import Kyrie2 from "../assets/kyrie2.png";
import Kyrie3 from "../assets/kyrie3.png";

const ShopSneakers = () => {
	const Kyries = [Kyrie1, Kyrie2, Kyrie3];
	let [shopShoe, setShopShoe] = useState(0);

	const Left = () => {
		shopShoe <= 0
			? setShopShoe((shopShoe = 0))
			: setShopShoe((shopShoe -= 1));
	};

	const Right = () => {
		shopShoe >= 2
			? setShopShoe((shopShoe = 2))
			: setShopShoe((shopShoe += 1));
	};

	return (
		<div className="shop-sneakers">
			<img src={Kyries[shopShoe]} alt="Nike Kyrie sneaker" />
			<div className="dir">
				<IoIosArrowBack className="arr" onClick={Left} />
				<div className="dots">
					<div className="dot"></div>
					<div className="dot"></div>
					<div className="dot"></div>
				</div>
				<IoIosArrowForward className="arr" onClick={Right} />
			</div>
		</div>
	);
};

export default ShopSneakers;
