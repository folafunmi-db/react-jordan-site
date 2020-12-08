import { useState, useRef, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { gsap } from "gsap";

import Kyrie1 from "../assets/kyrie1.png";
import Kyrie2 from "../assets/kyrie2.png";
import Kyrie3 from "../assets/kyrie3.png";

const ShopSneakers = () => {
	const Kyries = [Kyrie1, Kyrie2, Kyrie3];
	let [shopShoe, setShopShoe] = useState(0);
	let imgd = useRef(null);
	let dirs = useRef(null);

	useEffect(() => {
		gsap.from([imgd.current, dirs.current], 0.6, {
			x: -30,
			delay: 0.1,
			ease: "power3.easeInOut",
			opacity: 0,
			stagger: 0.3,
		});
	}, []);

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
			<img src={Kyries[shopShoe]} alt="Nike Kyrie sneaker" ref={imgd} />
			<div className="dir" ref={dirs}>
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
