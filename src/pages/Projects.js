import { React, useEffect } from "react";
import projectsData from "./projectsData";
import Title from "../components/Title";
import Card from "../components/Card";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Projects() {
	const controls = useAnimation();
	const [ref, inView] = useInView();

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

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
		if (!inView) {
			controls.start("hidden");
		}
	}, [controls, inView]);

	return (
		<section className="container" id="projects">
			<Title title="Projects" />
			<article className="justify-center">
				<div className="grid-2-col">
					{projectsData.map((project, i) => {
						return (
							<motion.div
								key={project.key}
								className="card-parent"
								ref={ref}
								animate={controls}
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
				</div>
			</article>
		</section>
	);
}

export default Projects;
