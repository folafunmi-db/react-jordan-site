import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Testimonial = () => {
	// let [testimony, setTestimony] = useState(0);
	const bodies = [
		{
			title: `ULTRA-STRONG SUPPORT`,
			body: `Lorem aute ex deserunt fugiat reprehenderit sit. Sint elit in
				enim eu laborum quis ea laborum qui tempor cupidatat minim
				incididunt.`,
		},
		{
			title: `DURABILITY EXPLORED`,
			body: `Excepteur irure amet sint velit officia aute officia amet do
				laborum cillum et. Minim aliquip dolor excepteur quis sunt cillum.
				Dolor sint laborum aute occaecat. Officia est ipsum ut mollit sint veniam ex.`,
		},
		{
			title: `TOUGHNESS GUARANTEED`,
			body: `Velit non mollit magna incididunt Lorem ea cupidatat adipisicing
				labore eu reprehenderit ex cupidatat cillum. Sit nulla id et ut duis.
				Qui consectetur labore qui laborum eiusmod veniam.`,
		},
	];

	let tHead = useRef(null);
	let tBody = useRef(null);
	let tDir = useRef(null);

	useEffect(() => {
		gsap.from([tHead, tBody, tDir], 0.6, {
			y: -40,
			delay: 1.8,
			ease: "power3.easeInOut",
			opacity: 0,
			stagger: 0.3,
		});
	}, []);

	return (
		<div className="testimonial">
			<div className="testimonial-head" ref={(el) => (tHead = el)}>
				{bodies[0].title}
			</div>
			<div className="testimonial-body" ref={(el) => (tBody = el)}>
				{bodies[0].body}
			</div>

			<div className="testimonial-dir" ref={(el) => (tDir = el)}>
				<div className="dot current"></div>
				<div className="dot"></div>
				<div className="dot"></div>
			</div>
		</div>
	);
};

export default Testimonial;
