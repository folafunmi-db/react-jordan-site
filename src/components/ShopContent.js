import { useState, useEffect, useRef } from "react";

import Sneaker1 from "../assets/air-max-270-total-orange-best-nike-shoes.png";
import Sneaker2 from "../assets/nike-basketball-logo-png_7699741.png";
import Heading2 from "./Heading2";
import ShopLite from "./ShopLite";
import ShopSneakers from "./ShopSneakers";

const ShopContent = () => {
	const lites = [
		{
			src: Sneaker1,
			title: "Runner Kotare",
			subTitle: "Black",
			text:
				"Consectetur amet nulla anim cillum officia qui dolor qui voluptate exercitation velit.",
			amount: "NGN 17,000",
		},
		{
			src: Sneaker2,
			title: "Nike Air-Max 270",
			subTitle: "Black",
			text:
				"Consectetur amet nulla anim cillum officia qui dolor qui voluptate exercitation velit.",
			amount: "NGN 47,000",
		},
	];

	return (
		<div className="shop-contents">
			<div className="shop-left">
				<Heading2 />
				<div className="lite">
					{lites.map((item, idx) => (
						<ShopLite
							src={item.src}
							title={item.title}
							subTitle={item.subTitle}
							text={item.text}
							amount={item.amount}
							key={idx}
						/>
          ))}
				</div>
			</div>
			<div className="shop-right">
				<ShopSneakers />
			</div>
		</div>
	);
};

export default ShopContent;
