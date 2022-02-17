import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const useAnimVisible = () => {
	const controls = useAnimation();
	const [ref, inView] = useInView({
		threshold: 0,
	});
	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
		// !inView triggers animation each time component comes into view
		// if (!inView) {
		// 	controls.start("hidden");
		// }
	}, [controls, inView]);
	return [ref, controls];
};

export default useAnimVisible;
