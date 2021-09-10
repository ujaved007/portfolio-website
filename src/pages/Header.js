import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import * as animationData from "../assets/hero-anim.json";
import { Link } from "react-scroll";

function Header() {
	const container = useRef(null);
	useEffect(() => {
		lottie.loadAnimation({
			container: container.current,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: animationData.default,
		});
	}, []);
	return (
		<div className="container" id="home">
			<header>
				<div className="hero-content">
					<h1>
						Hi, <br />
						I'm Usama
					</h1>
					<p className="hero">
						I’m a Front-end Web Developer with a knack for learning new
						technologies.
					</p>
					<button className="btn-main">
						<Link to="contact" smooth={true}>
							Get in touch
						</Link>
					</button>
				</div>
				<div className="hero-img" ref={container}></div>
			</header>
		</div>
	);
}

export default Header;
