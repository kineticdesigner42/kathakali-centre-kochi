// config/tailwind.cjs
// Tailwind CSS configuration file

// Define and export the JSON config object
const config = {
	content: ['./source/**/*.html'],
	theme: {
		extend: {
			fontFamily: {
				'work-sans': ['Work Sans', 'sans-serif'],
			},
		},
	},
	plugins: [],
}

module.exports = config
