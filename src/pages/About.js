import React from "react";
import Title from "../components/Title";

function About() {
	return (
		<div className="container">
			<Title title="About Me" />
			<section className="justify-center">
				<p className="text-justify-center">
					I am a Front End developer with experience in building websites and
					web applications. I specialize in JavaScript and React. I also have
					some experience working with no-code or low code platforms like
					webflow, squarespace, shopify and wordpress. I have a background in
					Mechanical Engineering and have also worked as a graphic
					designer/digital designer in my previous roles.
				</p>
				<div className="center padding-top">
					<button className="btn-main">See Projects</button>
				</div>
			</section>
		</div>
	);
}

export default About;
