import React from "react";

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
				<button className="card-btn">Live Link</button>
				<button className="card-btn">Github Link</button>
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
