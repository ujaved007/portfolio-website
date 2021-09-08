import React from "react";
import projectsData from "./projectsData";
import Title from "../components/Title";
import Card from "../components/Card";

function projects() {
	return (
		<section className="container" id="projects">
			<Title title="Projects" />
			<article className="justify-center">
				<div className="grid-2-col">
					{projectsData.map((project) => {
						return (
							<div key={project.key}>
								<Card
									image={project.image}
									title={project.title}
									description={project.description}
									liveLink={project.liveLink}
									githubLink={project.githubLink}
									tags={project.tags}
								/>
							</div>
						);
					})}
				</div>
			</article>
		</section>
	);
}

export default projects;
