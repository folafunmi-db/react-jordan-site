import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { NavLink } from "react-router-dom";

import Nike from "../assets/nike-png_4341181.png";
import { GoSearch } from "react-icons/go";

const Menubar = () => {
	let refLink1 = useRef(null);
	let refLink2 = useRef(null);

	const menu = [
		{
			title: `HOME`,
			link: `/`,
		},
		{
			title: `SHOP`,
			link: `/shop`,
		},
	];

	useEffect(() => {}, []);

	return (
		<div className="menu-bar">
			<div className="menu-left" ref={(el) => (refLink1 = el)}>
				<img src={Nike} alt="Nike Logo" />
				<GoSearch className="search" />
			</div>

			<div className="menu-right" ref={(el) => (refLink2 = el)}>
				{menu.map((item, idx) => (
					<NavLink
						key={idx}
						to={item.link}
						className="nav"
						activeStyle={{ fontWeight: "bold" }}
					>
						{item.title}
					</NavLink>
				))}
			</div>
		</div>
	);
};

export default Menubar;
