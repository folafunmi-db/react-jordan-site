import { FaTwitter } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";

const Sidebar = () => {
	return (
		<div className="side-bar">
			<CgMenuGridO className="grid" />
			<div className="socials">
				<a
					href="https://twitter.com/Folafunmi6"
					target="_blank"
					rel="noreferrer"
					className="link"
				>
					<FaTwitter className="ic" />
				</a>
				<a
					href="https://github.com/folafunmi-db"
					target="_blank"
					rel="noreferrer"
					className="link"
				>
					<FaGithubAlt className="ic" />
				</a>
			</div>
		</div>
	);
};

export default Sidebar;
