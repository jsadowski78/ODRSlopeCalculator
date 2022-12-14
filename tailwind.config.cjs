const config = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}',
		require('path').join(require.resolve('@brainandbones/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {}
	},

	plugins: [
		require('@brainandbones/skeleton/tailwind/theme.cjs'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms')
	]
};

module.exports = config;
