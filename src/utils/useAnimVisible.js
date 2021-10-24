import { react, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const useAnimVisible = () => {
	const controls = useAnimation();
	const [ref, inView] = useInView({
		threshold: 0.3,
	});
	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
		if (!inView) {
			controls.start("hidden");
		}
	}, [controls, inView]);
	return [ref, controls];
};

export default useAnimVisible;
