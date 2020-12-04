import Heading from "./Heading";
import MobileAppSection from "./MobileAppSection";
import Testimonial from "./Testimonial";
import Sneakers from "./Sneakers";
import Pic from "./Pic";

const Content = () => {
	return (
		<div className="contents">
			<div className="content top">
				<Heading />
				<Sneakers />
			</div>

			<div className="content bottom">
				<div className="vid-mob">
					<Pic />
					<MobileAppSection />
				</div>
				<Testimonial />
			</div>
		</div>
	);
};

export default Content;
