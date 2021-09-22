import { React, useState } from "react";

export default function HamburgerIcon() {
	const [hamburger, setHamburger] = useState(true);
	return (
		<>
			<div
				className={hamburger ? `hamburger` : `is-active`}
				id="hamburger-1"
				onClick={() => setHamburger(!hamburger)}
			>
				<span className="hamburger-line"></span>
				<span className="hamburger-line"></span>
				<span className="hamburger-line"></span>
			</div>
		</>
	);
}
