import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
	return (
		<div className="card">
			<div className="card-img-container">
				<img src={props.image} alt={`${props.title}`} className="card-img" />
			</div>
			<div className="card-desc">
				<h3>{props.title}</h3>
				<p>{props.description}</p>
			</div>
			<div className="card-links">
				<button className="card-btn">
					<Link to={{ pathname: `${props.liveLink}` }} target="_blank">
						Live Link
					</Link>
				</button>
				<button className="card-btn">
					<Link to={{ pathname: `${props.githubLink}` }} target="_blank">
						Github Link
					</Link>
				</button>
			</div>
			<div className="card-tags">
				{props.tags.map((prop) => {
					return <div className="tag">{prop}</div>;
				})}
			</div>
		</div>
	);
}

export default Card;
