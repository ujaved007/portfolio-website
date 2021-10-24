import { React, useEffect } from "react";
import Title from "../components/Title";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { variants, childVariants } from "../utils/AnimVariants";
import MainBtn from "../components/MainBtn";

function About() {
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
		<div className="container" id="about">
			<motion.div
				ref={ref}
				animate={controls}
				initial="hidden"
				variants={variants}
			>
				<Title title="About Me" />
				<section className="justify-center">
					<motion.p className="text-justify-center" variants={childVariants}>
						I am a Front End developer with experience in building websites and
						web applications. I specialize in JavaScript and React. I also have
						some experience working with no-code or low code platforms like
						webflow, squarespace, shopify and wordpress. I have a background in
						Mechanical Engineering and have also worked as a graphic
						designer/digital designer in my previous roles.
					</motion.p>
					<motion.div className="center padding-top" variants={childVariants}>
						<MainBtn text="See Projects" link="projects" />
					</motion.div>
				</section>
			</motion.div>
		</div>
	);
}

export default About;
