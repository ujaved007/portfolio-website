import { React } from "react";
import Title from "../components/Title";
import { motion } from "framer-motion";
import useAnimVisible from "../utils/useAnimVisible";
import { scaleVariants, scaleChildVariants } from "../utils/AnimVariants";

function Contact() {
	const [ref, controls] = useAnimVisible();

	return (
		<section className="container" id="contact">
			<Title title="Contact me" />
			<article className="justify-center align-center">
				<motion.form
					className="contact-form"
					name="contact"
					method="post"
					data-netlify="true"
					onSubmit="submit"
					ref={ref}
					animate={controls}
					initial="hidden"
					variants={scaleVariants}
				>
					<div className="form-style">
						<label htmlFor="name">Name*</label>
						<motion.input
							type="text"
							id="name"
							name="name"
							placeholder="Your Name.."
							className="input-field"
							required
							variants={scaleChildVariants}
						/>
					</div>
					<div className="form-style">
						<label htmlFor="email">Email*</label>
						<motion.input
							type="email"
							id="email"
							name="email"
							placeholder="Your Email.."
							className="input-field"
							required
							variants={scaleChildVariants}
						/>
					</div>
					<div className="form-style">
						<label htmlFor="subject">Subject</label>
						<motion.input
							type="text"
							id="subject"
							name="subject"
							placeholder="What’s this about? (Optional)"
							className="input-field"
							variants={scaleChildVariants}
						/>
					</div>
					<div className="form-style">
						<label htmlFor="message">Message</label>
						<motion.textarea
							name="message"
							id="message"
							cols="30"
							rows="7"
							className="input-field"
							placeholder="Your message..."
							required
							variants={scaleChildVariants}
						></motion.textarea>
					</div>
					<input type="hidden" name="form-name" value="contact" />

					<button className="btn-main margin-top" type="submit">
						Send Message
					</button>
				</motion.form>
			</article>
		</section>
	);
}

export default Contact;
