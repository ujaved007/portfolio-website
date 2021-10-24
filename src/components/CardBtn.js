import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CardBtn = ({ text, link }) => {
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
			className="card-btn"
			initial="rest"
			whileHover="hover"
			whileTap="pressed"
			variants={btnVariants}
		>
			<Link to={{ pathname: `${link}` }} target="_blank">
				{text}
			</Link>
		</motion.button>
	);
};

export default CardBtn;
