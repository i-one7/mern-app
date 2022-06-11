/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				banner: "url('/src/image/doodle.jpg')",
			},
			colors: {
				// root color
				"primary-light": "#fafafc",
				"secondary-light": "#ebeaee",
				"primary-dark": "#1b1c26",
				"secondary-dark": "#28293c",

				// text color
				"text-light": "#28293c",
				"text-dark": "#28293c",

				// element color
			},
		},
	},
	important: true,
	plugins: [],
};

