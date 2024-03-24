/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			lg: '640px',
			'2xl': '640px',
		},
		fontFamily: {
			sans: ['Josefin Sans', 'sans-serif'],
		},
		extend: {
			content: {
				checkedIcon: "url('./src/assets/images/icon-check.svg')",
			},
			container: {
				center: true,
				padding: '2rem',
			},
			colors: {
				primaryColor: 'hsl(220, 98%, 61%)',
				gradientFrom: 'hsl(192, 100%, 67%)',
				gradientTo: 'hsl(280, 87%, 65%)',
				lgtVeryLightGray: 'hsl(0, 0%, 98%)',
				lgtVeryLightGrayishBlue: 'hsl(236, 33%, 92%)',
				lgtLightGrayishBlue: 'hsl(233, 11%, 84%)',
				lgtDarkGrayishBlue: 'hsl(236, 9%, 61%)',
				lgtVeryDarkGrayishBlue: 'hsl(235, 19%, 35%)',
				drkVeryDarkBlue: 'hsl(235, 21%, 11%)',
				drkVeryDarkDesaturatedBlue: 'hsl(235, 24%, 19%)',
				drkLightGrayishBlue: 'hsl(234, 39%, 85%)',
				drkLightGrayishBlueHover: 'hsl(236, 33%, 92%)',
				drkDarkGrayishBlue: 'hsl(234, 11%, 52%)',
				drkVeryDarkGrayishBlue: 'hsl(233, 14%, 35%)',
				drkVeryDarkGrayishBlue: 'hsl(237, 14%, 26%)',
			},
			backgroundImage: {
				'desktop-light':
					"url('./src/assets/images/bg-desktop-light.jpg')",
			},
		},
	},
	plugins: [],
};
