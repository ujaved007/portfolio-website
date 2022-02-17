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

export const leftSlide = {
	hidden: {
		opacity: 0,
		x: -500,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
		},
	},
};
export const rightSlide = {
	hidden: {
		opacity: 0,
		x: 500,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
		},
	},
};

export const scaleVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

export const scaleChildVariants = {
	hidden: {
		scale: 0,
	},
	visible: {
		scale: 1,
		transition: {
			duration: 1,
		},
	},
};
