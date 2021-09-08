import React from "react";
import stacks from "./stacksData";
import Title from "../components/Title";

function TechStack() {
	return (
		<section className="container">
			<Title title="Tech Stack" />
			<article className="justify-center">
				<div className="stack-container">
					{stacks.map((stack) => {
						return (
							<div>
								<img className="stack-icon" src={stack} alt={`${stack}`} />
							</div>
						);
					})}
				</div>
			</article>
		</section>
	);
}

export default TechStack;
