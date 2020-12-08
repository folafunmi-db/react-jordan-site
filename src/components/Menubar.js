import { NavLink } from "react-router-dom";

import Nike from "../assets/nike-png_4341181.png";
import { GoSearch } from "react-icons/go";

const Menubar = ({pg}) => {
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


	return (
		<div className={`${pg}-bar`}>
			<div className={`${pg}-left`}>
				<img src={Nike} alt="Nike Logo" />
				<GoSearch className="search" />
			</div>

			<div className={`${pg}-right`}>
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
