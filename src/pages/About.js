import { React } from "react";
import Title from "../components/Title";
import { motion } from "framer-motion";
import { variants, childVariants } from "../utils/AnimVariants";
import MainBtn from "../components/MainBtn";
import useAnimVisible from "../utils/useAnimVisible";

function About() {
	const [ref, controls] = useAnimVisible();

	return (
		<div className="container" id="about">
			<motion.div ref={ref} initial="hidden" animate={controls} variants={variants}>
				<Title title="About Me" />
				<section className="justify-center">
					<motion.p className="text-justify-center" variants={childVariants}>
						I am a Front End developer with experience in building websites and web applications. I specialize in
						JavaScript and React. I also have some experience working with no-code or low code platforms like webflow,
						squarespace, shopify and wordpress. I have a background in Mechanical Engineering and have also worked as a
						graphic designer/digital designer in my previous roles.
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
