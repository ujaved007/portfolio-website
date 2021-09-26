import React, { useState, useEffect } from "react";
import { setTheme } from "../utils/themes";

const ThemeBtn = () => {
	const [togClass, setTogClass] = useState("dark");
	let theme = localStorage.getItem("theme");
	const handleOnClick = () => {
		if (localStorage.getItem("theme") === "theme-dark") {
			setTheme("theme-light");
			setTogClass("light");
		} else {
			setTheme("theme-dark");
			setTogClass("dark");
		}
	};
	useEffect(() => {
		if (localStorage.getItem("theme") === "theme-dark") {
			setTogClass("dark");
		} else if (localStorage.getItem("theme") === "theme-light") {
			setTogClass("light");
		}
	}, [theme]);
	return (
		<div>
			<label id="switch" className="switch">
				{togClass === "light" ? (
					<input
						type="checkbox"
						id="slider"
						className="toggle--checkbox"
						onChange={handleOnClick}
						checked
					/>
				) : (
					<input
						type="checkbox"
						id="slider"
						className="toggle--checkbox"
						onChange={handleOnClick}
					/>
				)}
				<span className="slider round"></span>
			</label>
		</div>
	);
};

export default ThemeBtn;
