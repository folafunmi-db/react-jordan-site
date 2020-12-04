import Boy from "../assets/boy.webp";
import { BsPlayFill } from "react-icons/bs";

const Pic = () => {
	return (
		<div className="pic">
			<img src={Boy} alt="A boy" />
			<BsPlayFill className="video-button" />
		</div>
	);
};

export default Pic;
