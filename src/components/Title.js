import { React } from "react";
import { motion } from "framer-motion";
import useAnimVisible from "../utils/useAnimVisible";

function Title(props) {
	const [ref, controls] = useAnimVisible();
	const variants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
		},
	};
	const leftSlide = {
		hidden: {
			x: -1000,
		},
		visible: {
			x: 0,
			transition: {
				duration: 0.5,
			},
		},
	};
	const rightSlide = {
		hidden: {
			x: 1000,
		},
		visible: {
			x: 0,
			transition: {
				duration: 0.5,
			},
		},
	};

	return (
		<article className="justify-center">
			<motion.div
				className="title"
				ref={ref}
				animate={controls}
				variants={variants}
			>
				<motion.h2 className="text-center" variants={leftSlide}>
					{props.title}
				</motion.h2>
				<motion.div className="underline" variants={rightSlide}></motion.div>
			</motion.div>
		</article>
	);
}

export default Title;
