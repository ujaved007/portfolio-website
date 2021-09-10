import React from "react";
import { Link } from "react-router-dom";
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";

function footer() {
	return (
		<div className="footer">
			<article className="content-center align-center">
				<h4 className="reverse">Social Links:</h4>
				<div className="footer-icons-container">
					<Link
						to={{ pathname: "https://github.com/ujaved007" }}
						target="_blank"
					>
						<img src={githubIcon} alt="github" className="footer-icon" />
					</Link>
					<Link
						to={{ pathname: "https://www.linkedin.com/in/usamajaved01/" }}
						target="_blank"
					>
						<img src={linkedinIcon} alt="linkedin" className="footer-icon" />
					</Link>
				</div>
			</article>
		</div>
	);
}

export default footer;
