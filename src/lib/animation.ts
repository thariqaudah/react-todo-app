export const list = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

export const item = {
	hidden: {
		y: '100%',
	},
	visible: {
		y: '0%',
		transition: {
			duration: 0.3,
		},
	},
};
