import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const MainBtn = ({ text, link }) => {
	const btnVariants = {
		hover: {
			scale: 1.1,
		},
		pressed: {
			scale: 0.9,
		},
		rest: {
			scale: 1,
		},
	};
	return (
		<motion.button
			className="btn-main"
			initial="rest"
			whileHover="hover"
			whileTap="pressed"
			variants={btnVariants}
		>
			<Link to={link} smooth={true}>
				{text}
			</Link>
		</motion.button>
	);
};

export default MainBtn;
