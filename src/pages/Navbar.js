import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";

function Navbar() {
	return (
		<nav>
			<div>
				<Link to="home" smooth={true}>
					<img src={logo} alt="logo" className="logo" />
				</Link>
			</div>
			<div>
				<ul className="links-container">
					<li>
						<Link to="about" spy={true} smooth={true} className="nav-links">
							About
						</Link>
					</li>
					<li>
						<Link to="projects" spy={true} smooth={true} className="nav-links">
							Projects
						</Link>
					</li>
					<li>
						<Link to="contact" spy={true} smooth={true} className="nav-links">
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
