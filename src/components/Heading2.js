import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Heading2 = () => {
	let first = useRef(null);
	let second = useRef(null);
	let third = useRef(null);
	let button = useRef(null);

	useEffect(() => {
    gsap.from([first.current, second.current, third.current, button.current], 0.6, {
		x: -40,
		delay: 0.6,
		ease: "back.easeInOut",
		opacity: 0,
		stagger: 0.3,
	});
  }, []);

	return (
		<div className="heading2">
			<div className="first" ref={first}>
				Online
			</div>
			<div className="second" ref={second}>
				SHOE
			</div>
			<div className="third" ref={third}>
				STORE
			</div>
			<button ref={button}>Shop Now</button>
		</div>
	);
};

export default Heading2;
