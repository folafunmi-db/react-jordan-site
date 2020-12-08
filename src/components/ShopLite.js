import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const ShopLite = ({ src, subTitle, title, text, amount }) => {
	let img = useRef(null);
	let rest = useRef(null);

	useEffect(() => {
		gsap.from(
			[img.current, rest.current],
			0.6,
			{
				y: -30,
				delay: 1.8,
				ease: "power3.easeInOut",
				opacity: 0,
				stagger: 0.3,
			}
		);
	}, []);

	return (
		<div className="shop-lite">
			<img src={src} alt="Nike sneaker" ref={img} />
			<div className="rest" ref={rest}>
				<h2>{title}</h2>
				<h4>{subTitle}</h4>
				<p>{text}</p>
				<h3>{amount}</h3>
			</div>
		</div>
	);
};

export default ShopLite;
