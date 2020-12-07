const ShopLite = ({ src, subTitle, title, text, amount }) => {
	return (
		<div className="shop-lite">
			<img src={src} alt="Nike sneaker" />
			<div className="rest">
				<h2>{title}</h2>
				<h4>{subTitle}</h4>
				<p>{text}</p>
				<h3>{amount}</h3>
			</div>
		</div>
	);
};

export default ShopLite;
