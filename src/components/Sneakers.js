import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

import Sneaker1 from "../assets/air-max-270-total-orange-best-nike-shoes.png";
import Sneaker2 from "../assets/nike-basketball-logo-png_7699741.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Sneakers = () => {
	const Sneakers = [Sneaker1, Sneaker2];
	let [sneaker, setSneaker] = useState(0);

	const cycleLeft = () => {
		setSneaker((sneaker = 0));
	};

	const cycleRight = () => {
		setSneaker((sneaker = 1));
	};

	let shoe = useRef(null);
	let arrB = useRef(null);

	useEffect(() => {
		gsap.from([shoe], 0.6, {
			x: -40,
			delay: 0.5,
			ease: "power3.easeInOut",
			opacity: 0,
		});
	}, [sneaker]);

	useEffect(() => {
		gsap.from([arrB], 0.6, {
			x: -40,
			delay: 1.2,
			ease: "power3.easeInOut",
			opacity: 0,
		});
	}, []);

	return (
		<div className="sneaker">
			<img
				src={Sneakers[sneaker]}
				alt="Nike Sneaker"
				ref={(el) => (shoe = el)}
			/>
			<div className="sneaker-dir" ref={(el) => (arrB = el)}>
				<IoIosArrowBack className="arr" onClick={cycleLeft} />
				<IoIosArrowForward className="arr" onClick={cycleRight} />
			</div>
		</div>
	);
};

export default Sneakers;
