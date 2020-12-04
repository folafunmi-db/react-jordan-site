import { FaGooglePlay } from "react-icons/fa";

const PlayStoreButton = () => {
	return (
		<div className="p-button">
			<FaGooglePlay className="p-logo" />
			<div className="p-words">
				<p className="p-top">Get it on</p>
				<p className="p-bottom">Play Store</p>
			</div>
		</div>
	);
};

export default PlayStoreButton;
