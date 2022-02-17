import { React } from "react";
import CardBtn from "./CardBtn";
import { motion } from "framer-motion";
import { scaleVariants, scaleChildVariants } from "../utils/AnimVariants";
import useAnimVisible from "../utils/useAnimVisible";

function Card(props) {
	const [ref, controls] = useAnimVisible();

	return (
		<div className="card">
			<motion.div ref={ref} initial="hidden" animate={controls} variants={scaleVariants}>
				<motion.div className="card-img-container" variants={scaleChildVariants}>
					<img src={props.image} alt={`${props.title}`} className="card-img" />
				</motion.div>
				<motion.div className="card-desc" variants={scaleChildVariants}>
					<h3>{props.title}</h3>
					<p>{props.description}</p>
				</motion.div>
				<motion.div className="card-links" variants={scaleChildVariants}>
					{props.liveLink ? <CardBtn link={props.liveLink} text="Live Link" /> : <div></div>}
					<CardBtn link={props.githubLink} text="Github Link" />
				</motion.div>
				<motion.div className="card-tags" variants={scaleChildVariants}>
					{props.tags.map((prop) => {
						return <div className="tag">{prop}</div>;
					})}
				</motion.div>
			</motion.div>
		</div>
	);
}

export default Card;
