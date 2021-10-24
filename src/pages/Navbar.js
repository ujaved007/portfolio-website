import { React, useState } from "react";
// import logo from "../assets/logo.png";
import Logo from "../components/Logo";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import HamburgerIcon from "../components/HamburgerIcon";
import ThemeBtn from "../components/ThemeBtn";
import { motion, AnimatePresence } from "framer-motion";
import useAnimVisible from "../utils/useAnimVisible";

function Navbar() {
	const [toggle, setToggle] = useState(false);
	const variants = {
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 1,
				staggerChildren: 0.1,
			},
		},
		hidden: {
			y: -200,
			opacity: 0,
		},
	};
	const childVariants = {
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 1,
			},
		},
		hidden: {
			x: -200,
			opacity: 0,
		},
	};
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
			<AnimatePresence>
				{toggle && (
					<motion.div
						className="links-container-mob"
						animate="visible"
						initial="hidden"
						variants={variants}
						exit={{
							y: -1000,
							transition: {
								duration: 1,
							},
						}}
					>
						<ul className="nav-links-mob">
							<motion.li variants={childVariants}>
								<Link to="about" spy={true} smooth={true} className="nav-links">
									About
								</Link>
							</motion.li>
							<motion.li variants={childVariants}>
								<Link
									to="projects"
									spy={true}
									smooth={true}
									className="nav-links"
								>
									Projects
								</Link>
							</motion.li>
							<motion.li variants={childVariants}>
								<Link
									to="contact"
									spy={true}
									smooth={true}
									className="nav-links"
								>
									Contact
								</Link>
							</motion.li>
							<motion.div variants={childVariants}>
								<ThemeBtn />
							</motion.div>
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}

export default Navbar;
