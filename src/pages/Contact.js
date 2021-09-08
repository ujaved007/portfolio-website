import React from "react";
import Title from "../components/Title";
function contact() {
	return (
		<section className="container">
			<Title title="Contact me" />
			<article className="justify-center align-center">
				<form action="POST">
					<div className="form-style">
						<label htmlFor="name">Name*</label>
						<input
							type="text"
							id="name"
							name="name"
							placeholder="Your Name.."
							className="input-field"
							required
						/>
					</div>
					<div className="form-style">
						<label htmlFor="email">Email*</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Your Email.."
							className="input-field"
							required
						/>
					</div>
					<div className="form-style">
						<label htmlFor="subject">Subject</label>
						<input
							type="text"
							id="subject"
							name="subject"
							placeholder="What’s this about? (Optional)"
							className="input-field"
						/>
					</div>
					<div className="form-style">
						<label htmlFor="message">Message</label>
						<textarea
							name="message"
							id="message"
							cols="30"
							rows="7"
							className="input-field"
							placeholder="Your message..."
							required
						></textarea>
					</div>
					<button className="btn-main margin-top">Send Message</button>
				</form>
			</article>
		</section>
	);
}

export default contact;
