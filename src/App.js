import React from "react";
import Header from "./pages/Header";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import TechStack from "./pages/TechStack";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Error from "./pages/Error";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<Router>
			<Route exact path="/">
				<React.Fragment>
					<Navbar />
					<main>
						<Header />
						<About />
						<TechStack />
						<Projects />
						<Contact />
					</main>
					<Footer />
				</React.Fragment>
			</Route>
		</Router>
	);
}

export default App;
