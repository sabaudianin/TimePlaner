/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			fontFamily: {
				primary: ["Merriweather", "sans-serif"],
				secondary: ["Sixtyfour Convergence", "sans-serif"],
			},
			colors: {
				primary: "#F87171",
				secondary: "#93C5FD",
				third: "#4ADE80",
				accent: "#EAB308",
			},
		},
	},
	plugins: [],
};
