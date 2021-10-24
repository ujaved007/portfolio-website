export const variants = {
	hidden: {
		opacity: 0,
		x: -200,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			staggerChildren: 0.1,
			duration: 0.5,
		},
	},
};
export const childVariants = {
	hidden: {
		opacity: 0,
		x: -200,
	},
	visible: {
		opacity: 1,
		x: 0,
	},
};
