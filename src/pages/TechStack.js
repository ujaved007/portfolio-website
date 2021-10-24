import { React, useEffect } from "react";
import stacks from "./stacksData";
import Title from "../components/Title";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { variants, childVariants } from "../utils/AnimVariants";

function TechStack() {
	const controls = useAnimation();
	const [ref, inView] = useInView();
	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
		if (!inView) {
			controls.start("hidden");
		}
	}, [controls, inView]);

	return (
		<section className="container">
			<motion.div
				ref={ref}
				animate={controls}
				initial="hidden"
				variants={variants}
			>
				<Title title="Tech Stack" />
				<article className="justify-center">
					<div className="stack-container">
						{stacks.map((stack) => {
							return (
								<div>
									<motion.img
										className="stack-icon"
										src={stack}
										alt={`${stack}`}
										variants={childVariants}
									/>
								</div>
							);
						})}
					</div>
				</article>
			</motion.div>
		</section>
	);
}

export default TechStack;
