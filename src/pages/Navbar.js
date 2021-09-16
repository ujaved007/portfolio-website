import { React, useState } from "react";
import logo from "../assets/logo.png";
import menuIcon from "../assets/menu.png";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

function Navbar() {
	const [toggle, setToggle] = useState(false);
	return (
		<>
			<nav>
				<article className="nav-container">
					<div onClick={() => scroll.scrollToTop()}>
						<img src={logo} alt="logo" className="logo" />
					</div>
					<div>
						<ul className="links-container">
							<li className="nav-link-container">
								<Link to="about" spy={true} smooth={true} className="nav-links">
									About
								</Link>
								<div className="nav-link-underline"></div>
							</li>
							<li className="nav-link-container">
								<Link
									to="projects"
									spy={true}
									smooth={true}
									className="nav-links"
								>
									Projects
								</Link>
								<div className="nav-link-underline"></div>
							</li>
							<li className="nav-link-container">
								<Link
									to="contact"
									spy={true}
									smooth={true}
									className="nav-links"
								>
									Contact
								</Link>
								<div className="nav-link-underline"></div>
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
