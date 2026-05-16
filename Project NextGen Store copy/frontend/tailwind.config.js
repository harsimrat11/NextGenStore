/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				'ps-blue': '#0070D2',
				'neon-blue': '#00BFFF',
				'ps-glow': '#0066CC',
				'almost-black': '#0a0a0a',
			},
			boxShadow: {
				'neon-glow': '0 0 20px rgba(0, 191, 255, 0.5)',
				'neon-glow-lg': '0 0 30px rgba(0, 191, 255, 0.3)',
				'ps-glow': '0 0 40px rgba(0, 112, 210, 0.6)',
			},
			animation: {
				'glow': 'glow 1.5s ease-in-out infinite alternate',
				'float': 'float 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			},
			keyframes: {
				glow: {
					'0%, 100%': { boxShadow: '0 0 20px rgba(0, 191, 255, 0.5)' },
					'50%': { boxShadow: '0 0 40px rgba(0, 191, 255, 0.8)' },
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 10px rgba(0, 191, 255, 0.3)' },
					'50%': { boxShadow: '0 0 30px rgba(0, 191, 255, 0.6)' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
				},
			},
		},
	},
	plugins: [],
};
