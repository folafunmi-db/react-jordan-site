import { FaGooglePlay } from "react-icons/fa";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const PlayStoreButton = () => {
	let btn = useRef(null);

	useEffect(() => {
		gsap.from(btn.current, 0.6, {
			y: -20,
			delay: 1.7,
			ease: "powr3.easeInOut",
			opacity: 0,
		});
	}, []);

	return (
		<div className="p-button" ref={btn}>
			<FaGooglePlay className="p-logo" />
			<div className="p-words">
				<p className="p-top">Get it on</p>
				<p className="p-bottom">Play Store</p>
			</div>
		</div>
	);
};

export default PlayStoreButton;
