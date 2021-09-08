import React from "react";

function Title(props) {
	return (
		<article className="justify-center">
			<div className="title">
				<h2 className="text-center">{props.title}</h2>
				<div className="underline"></div>
			</div>
		</article>
	);
}

export default Title;
