import { React, useState } from "react";
import logo from "../assets/logo.png";
import menuIcon from "../assets/menu.png";
import { Link } from "react-scroll";

function Navbar() {
	const [toggle, setToggle] = useState(false);
	return (
		<>
			<nav>
				<article className="nav-container">
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
								<Link
									to="projects"
									spy={true}
									smooth={true}
									className="nav-links"
								>
									Projects
								</Link>
							</li>
							<li>
								<Link
									to="contact"
									spy={true}
									smooth={true}
									className="nav-links"
								>
									Contact
								</Link>
							</li>
						</ul>
						<button onClick={() => setToggle(!toggle)} className="nav-btn">
							<img src={menuIcon} alt="menu-icon" className="nav-burger-icon" />
						</button>
					</div>
				</article>
			</nav>
			{toggle && (
				<div className="links-container-mob">
					<ul className="nav-links-mob">
						<li>
							<Link to="about" spy={true} smooth={true} className="nav-links">
								About
							</Link>
						</li>
						<li>
							<Link
								to="projects"
								spy={true}
								smooth={true}
								className="nav-links"
							>
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
			)}
		</>
	);
}

export default Navbar;
