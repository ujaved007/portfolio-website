import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
	return (
		<nav>
			<div>
				<img src={logo} alt="logo" className="logo" />
			</div>
			<div>
				<ul className="links-container">
					<li>
						<a href="/" className="nav-links">
							About
						</a>
					</li>
					<li>
						<a href="/" className="nav-links">
							Projects
						</a>
					</li>
					<li>
						<a href="/" className="nav-links">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
