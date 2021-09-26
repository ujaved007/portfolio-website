import { React, useState } from "react";
// import logo from "../assets/logo.png";
import Logo from "../components/Logo";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import HamburgerIcon from "../components/HamburgerIcon";
import ThemeBtn from "../components/ThemeBtn";

function Navbar() {
	const [toggle, setToggle] = useState(false);
	return (
		<>
			<nav>
				<article className="nav-container">
					<div onClick={() => scroll.scrollToTop()}>
						<Logo />
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
							<ThemeBtn />
						</ul>
						<button onClick={() => setToggle(!toggle)} className="nav-btn">
							<HamburgerIcon />
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
						<ThemeBtn />
					</ul>
				</div>
			)}
		</>
	);
}

export default Navbar;
