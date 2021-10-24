import { React, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Title(props) {
	const controls = useAnimation();
	const [ref, inView] = useInView();

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

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
		if (!inView) {
			controls.start("hidden");
		}
	}, [controls, inView]);

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
