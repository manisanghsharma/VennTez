/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				rearview: ["Rearview Mirror Demo"],
				lemon: ["DK Lemon Yellow Sun"],
			},
		},
	},
	plugins: [],
};

