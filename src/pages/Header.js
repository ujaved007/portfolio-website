import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import * as animationData from "../assets/hero-anim.json";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import MainBtn from "../components/MainBtn";

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
				<motion.div
					className="hero-content"
					initial={{ opacity: 0, translateX: -100 }}
					animate={{ opacity: 100, translateX: 0 }}
					transition={{ duration: 0.5 }}
				>
					<h1>
						Hi, <br />
						I'm Usama
					</h1>
					<p className="hero">
						I’m a Front-end Web Developer with a knack for learning new
						technologies.
					</p>
					<MainBtn link="contact" text="Get in Touch" />
				</motion.div>
				<motion.div
					className="hero-img"
					ref={container}
					initial={{ opacity: 0, translateX: 100 }}
					animate={{ opacity: 100, translateX: 0 }}
					transition={{ duration: 0.5 }}
				></motion.div>
			</header>
		</div>
	);
}

export default Header;
