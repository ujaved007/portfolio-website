import { React, useEffect } from "react";
import CardBtn from "./CardBtn";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Card(props) {
	const controls = useAnimation();
	const [ref, inView] = useInView();

	const variants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};
	const childVariants = {
		hidden: {
			scale: 0,
		},
		visible: {
			scale: 1,
			transition: {
				duration: 1,
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
		<div className="card">
			<motion.div ref={ref} animate={controls} variants={variants}>
				<motion.div className="card-img-container" variants={childVariants}>
					<img src={props.image} alt={`${props.title}`} className="card-img" />
				</motion.div>
				<motion.div className="card-desc" variants={childVariants}>
					<h3>{props.title}</h3>
					<p>{props.description}</p>
				</motion.div>
				<motion.div className="card-links" variants={childVariants}>
					<CardBtn link={props.liveLink} text="Live Link" />
					<CardBtn link={props.githubLink} text="Github Link" />
				</motion.div>
				<motion.div className="card-tags" variants={childVariants}>
					{props.tags.map((prop) => {
						return <div className="tag">{prop}</div>;
					})}
				</motion.div>
			</motion.div>
		</div>
	);
}

export default Card;
