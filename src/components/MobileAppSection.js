import PlayStoreButton from "./PlayStoreButton";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const MobileAppSection = () => {
	let mHead = useRef(null);
	let mBody = useRef(null);

	useEffect(() => {
		gsap.from([mHead.current, mBody.current], 0.6, {
			y: -40,
			delay: 1.8,
			ease: "power3.easeInOut",
			opacity: 0,
			stagger: 0.3,
		});
	}, []);

	return (
		<div className="mobile">
			<div className="mobile-head" ref={mHead}>
				MOBILE APP
			</div>
			<div className="mobile-body" ref={mBody}>
				Receive new updates straight to your mobile device
			</div>
			<PlayStoreButton />
		</div>
	);
};

export default MobileAppSection;
