import { React } from "react";
import projectsData from "./projectsData";
import Title from "../components/Title";
import Card from "../components/Card";
import { motion } from "framer-motion";
import useAnimVisible from "../utils/useAnimVisible";

function Projects() {
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
			opacity: 0,
			x: -500,
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.5,
			},
		},
	};
	const rightSlide = {
		hidden: {
			opacity: 0,
			x: 500,
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.5,
			},
		},
	};

	const [ref, controls] = useAnimVisible();

	return (
		<section className="container" id="projects">
			<Title title="Projects" />
			<article className="justify-center">
				<motion.div
					className="grid-2-col"
					ref={ref}
					animate={controls}
					variants={variants}
				>
					{projectsData.map((project, i) => {
						return (
							<motion.div
								key={project.key}
								className="card-parent"
								variants={i % 2 == 0 ? leftSlide : rightSlide}
							>
								<Card
									image={project.image}
									title={project.title}
									description={project.description}
									liveLink={project.liveLink}
									githubLink={project.githubLink}
									tags={project.tags}
								/>
							</motion.div>
						);
					})}
				</motion.div>
			</article>
		</section>
	);
}

export default Projects;
