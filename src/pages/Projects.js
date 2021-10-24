import { React, useEffect } from "react";
import projectsData from "./projectsData";
import Title from "../components/Title";
import Card from "../components/Card";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Projects() {
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
