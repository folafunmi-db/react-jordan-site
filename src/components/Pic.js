import Boy from "../assets/boy.webp";
import { BsPlayFill } from "react-icons/bs";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Pic = () => {
	let pic = useRef(null);

	useEffect(() => {
		gsap.from(pic.current, 0.6, {
			x: -20,
			delay: 1.7,
			ease: "powr3.easeInOut",
			opacity: 0,
		});
	}, []);

	return (
		<div className="pic" ref={pic}>
			<img src={Boy} alt="A boy" />
			<BsPlayFill className="video-button" />
		</div>
	);
};

export default Pic;
