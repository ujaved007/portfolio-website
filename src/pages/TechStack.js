import { React } from "react";
import stacks from "./stacksData";
import Title from "../components/Title";
import { motion } from "framer-motion";
import { variants, childVariants } from "../utils/AnimVariants";
import useAnimVisible from "../utils/useAnimVisible";

function TechStack() {
	const [ref, controls] = useAnimVisible();

	return (
		<section className="container">
			<motion.div ref={ref} animate={controls} initial="hidden" variants={variants}>
				<Title title="Tech Stack" />
				<article className="justify-center">
					<div className="stack-container">
						{stacks.map((stack, index) => {
							return (
								<div key={index}>
									<motion.img className="stack-icon" src={stack} alt={`${stack}`} variants={childVariants} />
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
