import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Heading = () => {
	let top = useRef(null);
	let mid = useRef(null);
	let bottom = useRef(null);

	useEffect(() => {
		gsap.from([top.current, mid.current, bottom.current], 0.6, {
			x: -40,
			delay: 0.6,
			ease: "power3.easeInOut",
			opacity: 0,
			stagger: 0.3,
		});
	}, []);

	return (
		<header className="heading">
			<div className="heading-top" ref={top}>
				BASKETBALL SHOE
			</div>
			<div className="heading-mid" ref={mid}>
				LeBron 16 - Watch the throne
			</div>
			<div className="heading-bottom" ref={bottom}>
				Commodo dolor incididunt nulla veniam ad quis anim deserunt id
				dolore. Reprehenderit deserunt laborum voluptate ea officia
				excepteur ullamco irure proident cupidatat in.
			</div>
		</header>
	);
};

export default Heading;
