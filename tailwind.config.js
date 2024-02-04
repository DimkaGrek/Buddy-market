/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: [
                'Inter',
                'ui-sans-serif',
                'system-ui',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ],
        },
        extend: {
            colors: {
                'my-violet': '#8f21d3',
                'my-dark-violet': '#390176',
                'my-light-violet': '#c793e7',
                'my-light-grey': '#9e9fa1',
                'my-light-grey-bg': '#e8e8ea',
                'my-light-text': '#c4bfcd',
                'my-red': '#eb5757',
                'my-purple': '#c793e7',
                'my-yellow': '#ffc56c',
            },
        },
    },
    plugins: [],
};
