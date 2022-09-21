const { spacing, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        // For the best performance and to avoid false positives,
        // be as specific as possible with your content configuration.
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['IBM Plex Sans', ...fontFamily.sans]
            }
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};